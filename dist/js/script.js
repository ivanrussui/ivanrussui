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
	$('#form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			checkbox: "required"
		},
		messages: {
			name: {
				required: "Пожалуйста, введите свое имя",
				minlength: jQuery.validator.format("Введите от {0} букв")
			},
			email: {
				required: "Пожалуйста, введите свою почту",
				email: "Неправильно введена почта"
			},
			checkbox: "Пожалуйста, подтвердите согласие"
		}
	});

	// Ajax
	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");

			
			$('form').trigger('reset');
			return false;
		});
	});
});