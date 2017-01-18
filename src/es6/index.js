$(() => {
	$('.card').mouseover(function(){
		console.log($(this).hasClass('active'));
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{

			$(this).addClass('active');
		}
	});
	let time=0;
	let go=setInterval(()=>{
		if(time<$('#container').find('.card').length){
			$('#container').find('.card').removeClass('border');
			$('#container').find('.card').eq(time).addClass('border');
			time++;
		}else {
			time=0;
		}
	},300);
	$('#ting').click(function(){
		clearInterval(go);
		$('#container').find('.card').each(function(i,ele){
			if($(ele).hasClass('border')){
				$(this).addClass('active');
				return false;
			}
		})
	})
})