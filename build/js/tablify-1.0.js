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
        const tdpadd = $("td", table).css('padding-right');

        if(!$("thead").length){
            $('th').first().parent().wrap("<thead></thead>");
        }
        $('tbody').contents().unwrap();
        $('table > tr').wrapAll( "<tbody></tbody>" );

        $("thead th", table).each(function(index, element){
            // Add header values to before element in css
            if(!$(element).hasClass('tablify-ignore')){
                var selector = 'td:nth-of-type('+(index+1)+'):before ';
                var rules = " content: '"+$(element).html()+"'; left: "+tdpadd+"; ";
                addRule(sheet, selector, rules);
            } else {
                $('td:nth-of-type('+(index+1)+')').addClass('tablify-ignore');
            }
        });
        if(limit > 1){
            $('tr').addClass('tablify-ignore');
            for(i=1; i<=limit; i++)
                $('tr:nth-of-type('+(i+1)+')').removeClass('tablify-ignore');
        }
    });
};
