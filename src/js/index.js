'use strict';

$(function () {
    $.ajax({
        url: 'data.json',
        type: 'GET',
        success: function success(data) {

            $(data).each(function (index, data) {

                $('#container').append('<div class="row">\n                        <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">\n\t\t\t\t\t<div class="card">\n                        <img src="' + data.mdImg + '" alt="" class="img">\n                      \n                    </div>\n\t\t\t\t</div>\n                    </div>\n');
            });
        }
    });
});