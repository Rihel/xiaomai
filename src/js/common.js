'use strict';

$(function () {
    // $.get('/common/header.html', data => {
    //     $('#container').before(data);
    // })
    $.get('/common/footer.html', function (data) {
        $('#container').after(data);
    });
});