$.fn.tablify = function(limit) {
    if (typeof(limit)==='undefined') limit = 0;
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

    return this.each(function() {
        $(this).addClass('tablify-wrap');

        const table = this;

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
            if(!$(element).hasClass('tablify-ignore')){
                var selector = '.tablify-wrap td:nth-of-type('+(index+1)+'):before ';
                var rules = " content: '"+$(element).html()+"'; ";
                addRule(sheet, selector, rules);
            } else {
                $('td:nth-of-type('+(index+1)+')', table).addClass('tablify-ignore');
            }
        });
        if(limit > 1){
            $('tr', table).addClass('tablify-ignore');
            for(i=1; i<=limit; i++)
                $('tr:nth-of-type('+(i+1)+')', table).removeClass('tablify-ignore');
        }
    });
};
