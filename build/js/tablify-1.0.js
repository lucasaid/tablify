
$.fn.tablify = function(config) {
    if (typeof(config)==='undefined') config = {
        limit: 0,
        hidden: []
    };

    if (typeof(config.limit)==='undefined') config.limit = 0;
    if (typeof(config.hidden)==='undefined') config.hidden = [];

    return this.each(function(index) {

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
                    $('tbody td:nth-of-type('+(index+1)+')', table).each(function(indexCell, tableCell){
                        $(tableCell).attr('data-header',$(element).html())
                    });
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
