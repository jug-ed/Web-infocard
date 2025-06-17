var usrLng = navigator.languages[0];

$(document).ready(function() {
	$('.head_burg,.head_link').click(function(event) {
		$('.head_burg,.head_menu').toggleClass('active');
	});

	setTimeout(popupTimeShow, 10000);
});



function lngTxtRange(lang) {
	for (let key in lngArr) {
		let el = document.getElementById("lng-"+key);
		if (el) {
			el.innerHTML = lngArr[key][lang];
		}
	}
}
lngTxtRange(usrLng);



const popupList = {
	"en-US":['Simplicity is the highest degree of sophistication', 'Remove the unnecessary, leave the important', 'Minimalism is the path to harmony', 'There is beauty in simplicity', 'Minimalism is preserving what is valuable and rejecting what is distracting', 'Simplicity is a lifestyle', 'Less clutter - more freedom'],
	"ru-RU":['Простота — высшая степень утончённости', 'Убирай лишнее, оставляй важное', 'Минимализм — путь к гармонии', 'В простоте – красота', 'Минимализм — это сохранение ценного и отказ от отвлекающего', 'Простота — стиль жизни', 'Меньше хлама — больше свободы']
}

let curPopInx = 0;

function popupTimeShow() {
	try { $('#popup_text').text(popupList[usrLng][curPopInx]); }
	catch { $('#popup_text').text(popupList["en-US"][curPopInx]); }
	$('#popup').css('opacity', '100%');
	setTimeout(() => {
		$('#popup').css('opacity', '0%');
	}, 3000);

	try { curPopInx = (curPopInx + 1) % popupList[usrLng].length; }
	catch { curPopInx = (curPopInx + 1) % popupList["en-US"].length; }
	setTimeout(popupTimeShow, 15000);
}



const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting){
			entry.target.classList.add('animate');
			observer.unobserve(entry.target);
		}
	});
}, {
	threshold: 0.1
});

document.querySelectorAll('.blk, .about p, #lng-about, #lng-project').forEach(el => {
	observer.observe(el);
});