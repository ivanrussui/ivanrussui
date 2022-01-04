// window.addEventListener('DOMContentLoader', () => {
const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeBtn = document.querySelector('.menu__close'),
	bodyLock = document.querySelector('body'),
	subTitle = document.querySelector('.promo__subtitle'),
	promoBtn = document.querySelector('.promo__btns'),
	title = document.querySelector('h1'),
	overlayOver = document.querySelector('.menu__overlay'),
	skills = document.querySelectorAll('.skills__item'),
	promoSection = document.querySelector('#up'),
	down = document.createElement('div'),
	downArrow = document.createElement('div'),
	contactsSubtitle = document.querySelector('.contacts__subtitle'),
	aboutSubtitle = document.querySelector('.about__subtitle'),
	side = document.querySelector('.sidepanel'),
	sideDivider = document.querySelector('.sidepanel__divider'),
	sideText = document.querySelector('.sidepanel__text > span'),
	sideLink = document.querySelectorAll('.sidepanel__link');


function changeColorSidepanel() {
	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= '450') {
			sideLink.forEach(element => {
				element.classList.remove('sidepanel__link');
				element.classList.add('link1');
				element.classList.add('link2');
				element.classList.add('link3');
			});
	
		} else {
			sideLink.forEach(element => {
				element.classList.add('sidepanel__link');
				element.classList.remove('link1');
				element.classList.remove('link2');
				element.classList.remove('link3');
			});
		}
	});
	
	
	// изменение цвета боковой полосы при скролле
	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= '350') {
			sideDivider.style.cssText = 'background-color: #6d33ff; transition: .1s all;';
		} else {
			sideDivider.style.cssText = 'background-color: black; transition: .1s all;';
		}
	});
	
	// изменение цвета боковой надписи при скролле
	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= '250') {
			sideText.style.cssText = 'color: #6d33ff; transition: .1s all';
		} else {
			sideText.style.cssText = 'color: black; transition: .1s all';
		}
	});
}

changeColorSidepanel();

if (window.pageYOffset >= '250') {
	changeColorSidepanel();
}




// активирую анимацию boingInUp при скролле 200
window.addEventListener('scroll', () => {
	if (window.pageYOffset >= '200') {
		aboutSubtitle.style.cssText = `animation: boingInUp 2s 3; animation-delay: 1s;`;
	}
});
// активирую анимацию contacts при скролле 3200
window.addEventListener('scroll', () => {
	if (window.pageYOffset >= '3200') {
		contactsSubtitle.style.cssText = `animation: contacts 2s 5; animation-delay: 1s;`;
	}
});


// добавляю в разметку down и добавляю ему класс 'down'
promoSection.append(down);
down.classList.add('down');

// добавляю в разметку downArrow и добавляю ему класс 'down__arrow'
down.append(downArrow);
downArrow.classList.add('down__arrow');

// перебираю и вешаю обработчик mouseenter и добавляю стили
skills.forEach((skills) => {
	skills.addEventListener('mouseenter', () => {
		skills.style.cssText = `animation: skills 1.5s 1 ease-in-out; border: 2px solid #6d33ff`;
	});
});

skills.forEach((skills) => {
	skills.addEventListener('mouseleave', () => {
		skills.style.cssText = `animation: none; border: 1px solid #000`;
	});
});



// при клике на гамбургер доб стили
hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	bodyLock.classList.add('lock');
	title.style.display = 'none';
	subTitle.style.display = 'none';
	promoBtn.style.display = 'none';
	downArrow.style.display = 'none';
	// overlayOver.style.cssText = `opacity: .2; cursor: pointer`;
});



// при клике на закрытие гамбургера убираю стили
// closeBtn.addEventListener('click', () => {
//   menu.classList.remove('active');
//   bodyLock.classList.remove('lock');
//   title.style.display = 'block';
//   subTitle.style.display = 'block';
//   promoBtn.style.display = 'flex';
// 	downArrow.style.cssText = `display: block`;
// 	// downArrow.style.cssText = `animation: downArrow 2s infinite;`;
//   // down.style.cssText = `display: none`;
// 	// down.style.animation = 'none';
// 	// downArrow.style.display = 'none';
// 	// downArrow.style.cssText = `display: none; animation: none`;
// 	// downArrow.style.cssText = `display: block; animation: downArrow 1.7s infinite ease-in-out`;
// });

// пишу closeBtn (закрытие гамбургера) в функцию closeMenu чтобы код не повторялся и переиспольз функцию
function closeMenu() {
	menu.classList.remove('active');
	bodyLock.classList.remove('lock');
	title.style.display = 'block';
	subTitle.style.display = 'block';
	promoBtn.style.display = 'flex';
	downArrow.style.cssText = `display: block`;
}
// при клике closeBtn (закрытие гамбургера) активирую функ closeMenu 
closeBtn.addEventListener('click', closeMenu);

// при открытом гамбургере если кликнуть на обвертку, гамбургер закрывается
overlayOver.addEventListener('click', closeMenu);

// закрытие menu при нажатии Esc
document.addEventListener('keydown', (e) => {
	// eventcode у Esc - Escape && чтобы функ closeMenu() вызывалась только когда menu открыто
	if (e.code === 'Escape' && menu.classList.contains('active')) {
		closeMenu();
	}
});

// при mouseout меняю опасити
overlayOver.addEventListener('mouseout', () => {
	overlayOver.style.cssText = `opacity: 0.1`;
	// downArrow.style.cssText = `display: block; animation: leftUpArrow 1.7s infinite ease-in-out`;
	// down.style.cssText = `bottom: 50%; left: 30%`;
});
overlayOver.addEventListener('mouseover', () => {
	overlayOver.style.cssText = `opacity: .8`;
	// downArrow.style.display = 'none';
	// down.style.cssText = `bottom: 10%; left: 50%`
});

// внутри бургера при переходе по ссылкам на стр закрытие бургера
let menuLink = document.querySelectorAll('.menu__link > a');

for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].addEventListener('click', () => {
		menu.classList.remove('active');
		bodyLock.classList.remove('lock');
		title.style.display = 'block';
		subTitle.style.display = 'block';
		promoBtn.style.display = 'flex';
		downArrow.style.display = 'block';
	});
}

// автоматический пересчет процентов
const counters = document.querySelectorAll('.skills__ratings-counter'),
	lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

// });

// jQuery плагины
$(document).ready(function () {
	// Validate
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				email: {
					required: true,
					email: true,
				},
				checkbox: 'required',
			},
			messages: {
				name: {
					required: 'Пожалуйста, введите свое имя',
					minlength: jQuery.validator.format('Введите от {0} букв'),
				},
				email: {
					required: 'Пожалуйста, введите свою почту',
					email: 'Неправильно введена почта',
				},
				checkbox: 'Пожалуйста, подтвердите согласие',
			},
		});
	}

	validateForms('#form');

	// Ajax
	$('form').submit(function (e) {
		e.preventDefault();

		// это условие внутри Ajax чтобы письмо пустым не отправлялось
		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize(),
		}).done(function () {
			$(this).find('input').val('');
			$('.overlay, #thanks').slideDown('slow');
			$('body').toggleClass('lock'); // добавляем класс блокирующий прокрутку

			$('form').trigger('reset');
		});
		return false;
	});

	// modal при отправки письма

	// $('.contacts__btn').on('click', function () {
	//   $('.overlay, #thanks').slideDown('slow');
	// });
	// этот скрипт не нужен так как он срабатывая игнорирует валидацию

	$('.modal__close').on('click', function () {
		$('.overlay, #thanks').slideUp(500);
		$('body').toggleClass('lock'); // убираем класс блок прокрутку
	});

	// кнопка наверх
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	// плавность перехода по всем ссылкам на сайте
	$("a[href^='#']").click(function () {
		const _href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(_href).offset().top + 'px'
		});
		return false;
	});
});