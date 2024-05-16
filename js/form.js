window.onmessage = (event) => {
    if (typeof event.data === 'object' && event.data) {
        const ui = event.data.name;
        console.log("Received data: ", event.data);

        switch (ui) {
            case "ui:confirm_signup":
                hidePopupMain(); // Скрывает основной попап
                showPopup(); // Показывает другой попап, если это необходимо
                reloadFrame(); // Перезагружает фрейм для сброса состояния регистрации
                break;
            case "ui:open_login":
                document.location.href = 'https://preprod.rakebit.com/signup?landing=registration#signup';
                break;
        }
    }
}

function reloadFrame() {
    var myFrame = document.querySelector('iframe#TRUE_SIGNUP_FRAME');
    if (myFrame) {
        var baseSrc = 'https://preprod.rakebit.com/signup?landing=registration';  // Базовый URL
        var unique = new Date().getTime();  // Создание уникального timestamp
        myFrame.src = baseSrc + '#signup&reload=' + unique;  // Добавление timestamp к URL
    }
}

window.addEventListener('load', function () {
  let myFrame = document.querySelector('iframe#TRUE_SIGNUP_FRAME');

  myFrame.onload = () => {
    window.myFrameSignup = myFrame;
    let action = {
      name: 'action:add_style',
      href: './../css/style.css'
    }
    window.myFrameSignup.contentWindow.postMessage(action, '*');
  }
}, false);

function hidePopupMain() {
   var popup = document.querySelector('.popup'); // Селектор для элемента попапа
    if (popup) {
        popup.classList.add('hidden'); // Добавляем класс 'hidden' к попапу
    }
}

function showPopup() {
  var popup = document.querySelector('.popup-2');
  if (popup) {
    popup.style.display = 'block';
    popup.style.zIndex = '2999';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var popupButton = document.querySelector('.button.button__popup_2 a');
  if (popupButton) {
    popupButton.addEventListener('click', function(event) {
      event.preventDefault();

      var popups = document.querySelectorAll('.popup-2, .popup');
      popups.forEach(function(popup) {
        if (popup.classList.contains('popup-2')) {
          popup.style.display = 'none'; // Установка display:none только для элементов с классом popup-2
        } else if (popup.classList.contains('popup')) {
          popup.classList.add('hidden'); // Добавление класса hidden только для элементов с классом popup
        }
      });

      var banner = document.querySelector('.banner');
      if (banner) {
        banner.style.display = 'block';
        banner.scrollIntoView({ behavior: 'smooth' });
      }

      /*setTimeout(function() {
        window.location.reload();
      }, 5000); */
    });
  }
});
