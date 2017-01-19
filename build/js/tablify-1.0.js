$.fn.tablify = function() {
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
            var selector = 'td:nth-of-type('+(index+1)+'):before ';
            var rules = " content: '"+$(element).html()+"'; left: "+tdpadd+"; ";

            if($.inArray("insertRule",sheet)) {
                sheet.insertRule(selector + "{" + rules + "}", 0);
            }
            else if($.inArray("addRule",sheet)) {
                sheet.addRule(selector, rules);
            }
        });
    });
};
