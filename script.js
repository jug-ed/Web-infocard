const popupList = ['Простота — высшая степень утончённости', 'Убирай лишнее, оставляй важное', 'Минимализм — путь к гармонии', 'В простоте – красота', 'Минимализм — это сохранение ценного и отказ от отвлекающего', 'Простота — стиль жизни', 'Меньше хлама — больше свободы'];

let curPopInx = 0;

function popupTimeShow() {
	$('#popup_text').text(popupList[curPopInx]);
	$('#popup').css('opacity', '100%');
	setTimeout(() => {
		$('#popup').css('opacity', '0%');
	}, 3000);

	curPopInx = (curPopInx + 1) % popupList.length;
	setTimeout(popupTimeShow, 15000);
}


$(document).ready(function() {
	$('.head_burg,.head_link').click(function(event) {
		$('.head_burg,.head_menu').toggleClass('active');
	});

    $('.blk').toggleClass('open');

	setTimeout(popupTimeShow, 10000);
});