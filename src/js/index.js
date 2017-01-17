'use strict';

$(function () {
	$.ajax({
		url: 'data.json',
		type: 'GET',
		success: function success(data) {

			$(data).each(function (index, data) {

				$('.container').append('<div class="col-md-3 col-lg-3 col-sm-4 col-xs-6" style="background: red;">\n\t\t\t\t\t<img src="' + data.mdImg + '" alt="" class="img">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h2>' + data.title + '</h2>\n\t\t\t\t\t\t<p>' + data.caption + '</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n');
			});
		}
	});
});

alert('aaa');