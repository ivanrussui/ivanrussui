// кнопка бургер
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeBtn = document.querySelector('.menu__close'),
	bodyLock = document.querySelector('body'),
	subTitle = document.querySelector('.promo__subtitle'),
	promoBtn = document.querySelector('.promo__btns'),
	title = document.querySelector('h1'),
	menuActive = document.querySelector('.menu'),
	overlayOver = document.querySelector('.menu__overlay'),
	skills = document.querySelectorAll('.skills__item');

	// console.log(skills);
// надо написать фо ич чтобы цвет менялся
// skills.addEventListener('mouseout', () => {
// 	skills.style.backgroundColor = 'rebeccapurple';
// });
// skills.addEventListener('mouseover', () => {
// 	skills.style.backgroundColor = 'grey';
// });

overlayOver.addEventListener('click', () => {
	menuActive.classList.remove('active');
	title.style.display = 'block';
	subTitle.style.display = 'block';
	promoBtn.style.display = 'flex';
	bodyLock.classList.add('lock');
});

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
	bodyLock.classList.add('lock');
	title.style.display = 'none';
	subTitle.style.display = 'none';
	promoBtn.style.display = 'none';
	// overlayOver.style.opacity = '.2';
	overlayOver.style.cssText = `opacity: .2; cursor: pointer`;
});

overlayOver.addEventListener('mouseout', () => {
	// overlayOver.style.opacity = '.3';
	overlayOver.style.cssText = `opacity: .3; cursor: pointer`;

});
overlayOver.addEventListener('mouseover', () => {
	// overlayOver.style.opacity = '.2';
	overlayOver.style.cssText = `opacity: .2; cursor: pointer`;
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
	bodyLock.classList.remove('lock');
	title.style.display = 'block';
	subTitle.style.display = 'block';
	promoBtn.style.display = 'flex';
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


  });
}

// автоматический пересчет процентов
const counters = document.querySelectorAll('.skills__ratings-counter'),
  lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

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
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });
});
