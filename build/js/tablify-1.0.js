$.fn.tablify = function() {
    return this.each(function() {
        $(this).addClass('tablify-wrap');

        const table = this;
        const sheet = document.styleSheets[0];
        const tdpadd = $("td", table).css('padding-left');

        if(!$("thead").length){
            $('th').first().parent().wrap("<thead></thead>");
        }
        $('tbody').contents().unwrap();
        $('table > tr').wrapAll( "<tbody></tbody>" );

        $("thead, th", table).each(function(index, element){
            var selector = 'td:nth-of-type('+index+'):before';
            var rules = 'content: "'+$(element).html()+'"; left: '+tdpadd+';';

            if("insertRule" in sheet) {
                sheet.insertRule(selector + "{" + rules + "}", 0);
            }
            else if("addRule" in sheet) {
                sheet.addRule(selector, rules);
            }
        });
    });
};
