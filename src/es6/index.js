$(() => {
    $.ajax({
        url: 'data.json',
        type: 'GET',
        success: (data) => {

            $(data).each((index, data) => {

                $('#container').append(
                    `<div class="row">
                        <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
					<div class="card">
                        <img src="${data.mdImg}" alt="" class="img">
                      
                    </div>
				</div>
                    </div>
`)
            })
        }
    })
})