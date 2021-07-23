const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeBtn = document.querySelector('.menu__close'),
  bodyLock = document.querySelector('body'),
  subTitle = document.querySelector('.promo__subtitle'),
  promoBtn = document.querySelector('.promo__btns'),
  title = document.querySelector('h1'),
  menuActive = document.querySelector('.menu'),
  overlayOver = document.querySelector('.menu__overlay'),
  skills = document.querySelectorAll('.skills__item'),
  promoSection = document.querySelector('#up'),
  down = document.createElement('div'),
  downArrow = document.createElement('div');

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

// overlayOver.addEventListener('click', () => {
//   menuActive.classList.remove('active');
//   bodyLock.classList.remove('lock');
//   title.style.display = 'block';
//   subTitle.style.display = 'block';
//   promoBtn.style.display = 'flex';
// });

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

// пишу closeBtn в функцию closeMenu чтобы код не повторялся и переиспольз функцию
function closeMenu() {
	menu.classList.remove('active');
  bodyLock.classList.remove('lock');
  title.style.display = 'block';
  subTitle.style.display = 'block';
  promoBtn.style.display = 'flex';
	downArrow.style.cssText = `display: block`;
}

closeBtn.addEventListener('click', closeMenu);

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
