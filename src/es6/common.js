$(() => {
    // $.get('/common/header.html', data => {
    //     $('#container').before(data);
    // })
    $.get('/common/footer.html', data => {
        $('#container').after(data);
    })
})