// кнопка бургер
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeBtn = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

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
  });

});
