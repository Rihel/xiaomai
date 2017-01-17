$(()=>{
	$.ajax({
		url:'data.json',
		type:'GET',
		success:(data)=>{

			$(data).each((index,data)=>{

				$('.container').append(
					`<div class="col-md-3 col-lg-3 col-sm-4 col-xs-6" style="background: red;">
					<img src="${data.mdImg}" alt="" class="img">
					<div>
						<h2>${data.title}</h2>
						<p>${data.caption}</p>
					</div>
				</div>
`)
			})
		}
	})
})

alert('aaa');