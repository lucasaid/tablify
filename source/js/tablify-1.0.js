
$.fn.tablify = function(config) {
    if (typeof(config)==='undefined') config = {
        limit: 0,
        hidden: []
    };

    if (typeof(config.limit)==='undefined') config.limit = 0;
    if (typeof(config.hidden)==='undefined') config.hidden = [];

    const sheet = (function() {
        // Create the <style> tag
        var style = document.createElement("style");

        // WebKit hack
        style.appendChild(document.createTextNode(""));

        style.type  = 'text/css';
        style.rel   = 'stylesheet';
        style.media = 'screen';

        // Add the <style> element to the page
        document.head.appendChild(style);
        return style.sheet;
    })();

    var addRule = function(sheet, selector, rules){
        if($.inArray("insertRule",sheet)) {
            sheet.insertRule(selector + "{" + rules + "}", 0);
        }
        else if($.inArray("addRule",sheet)) {
            sheet.addRule(selector, rules);
        }
    };

    String.prototype.hashCode = function() {
      var hash = 0, i, chr, len;
      if (this.length === 0) return hash;
      for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) + hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };

    return this.each(function(index) {
        var selector = $(this)
          .parents()
          .map(function() { return this.tagName; })
          .get()
          .reverse()
          .concat([this.nodeName])
          .join("");

        var id = $(this).attr("id");
        if (id) {
          selector += "#"+ id;
        }

        var classNames = $(this).attr("class");
        if (classNames) {
          selector += "." + $.trim(classNames).replace(/\s/gi, ".");
        }
        selector += index;
        var uniqueId = "tablify-uq-"+selector.hashCode();
        $(this).attr({id: "tablify-uq-"+selector.hashCode()})
        $(this).addClass('tablify-wrap');

        const table = this;
        if(!$("th", table).next().is('td')){
            if(!$("th", table).length){
              $("tr:first-child td", table).each(function(index, element){
                var th = $("<th />");
                Array.prototype.slice.call(element.attributes).forEach(function(a) {
                  th.attr(a.name, a.value);
                });
                $(element).wrapInner(th).children(0).unwrap();
              });
            }

            if(!$("thead", table).length){
              $('th', table).first().parent().wrap("<thead></thead>");
            }
            $('tbody', table).contents().unwrap();
            $('> tr', table).wrapAll( "<tbody></tbody>" );

            $("thead th", table).each(function(index, element){
                // Add header values to before element in css
                if((!$(element).hasClass('tablify-ignore') && config.hidden.length <= 0) || (config.hidden.length > 0 && config.hidden.indexOf(index+1) === -1)){
                    var selector = "#"+uniqueId+'.tablify-wrap td:nth-of-type('+(index+1)+'):before ';
                    var rules = " content: '"+$(element).html()+"'; ";
                    addRule(sheet, selector, rules);
                } else {
                    $('td:nth-of-type('+(index+1)+')', table).addClass('tablify-ignore');
                }
            });
            if(config.limit >= 1){
                $('tr', table).addClass('tablify-ignore');
                for(i=1; i<=config.limit; i++)
                    $('tr:nth-of-type('+i+')', table).removeClass('tablify-ignore');
            }
        } else {
            $(this).addClass('tablify-wrap__horizontal');
        }
    });
};
