// кнопка бургер
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeBtn = document.querySelector('.menu__close'),
	bodyLock = document.querySelector('body');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
	bodyLock.classList.add('lock');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
	bodyLock.classList.remove('lock');
});

// внутри бургера при переходе по ссылкам на стр закрытие бургера
let menuLink = document.querySelectorAll('.menu__link > a');

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function () {
    menu.classList.remove('active');
		bodyLock.classList.remove('lock');
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
