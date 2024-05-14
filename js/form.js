
  window.onmessage = (event) => {
  if (typeof event.data === 'object') {
    const ui = event.data.name;
    console.log(event.data);

    switch (ui) {
      case "ui:confirm_signup":
        // При успешной регистрации скрываем фрейм и показываем попап
        hideFrame();
        showPopup();
        break;
      case "ui:open_login":
        document.location.href = 'https://preprod.rakebit.com/signup?landing=registration#signup';
        break;
    }
  }
}

window.addEventListener('load', function (event) {
  let myFrame = document.querySelector('iframe#TRUE_SIGNUP_FRAME');

  myFrame.onload = () => {  // Исправлено здесь
    window.myFrameSignup = myFrame;
    let action = {
      name: 'action:add_style',
      href: './../css/style.css'
    }
    window.myFrameSignup.contentWindow.postMessage(action, '*');
  }
}, false);

function hideFrame() {
  var myFrame = document.querySelector('iframe#TRUE_SIGNUP_FRAME');
  if (myFrame) {
    myFrame.style.display = 'none'; // Скрываем фрейм
  }
}

function showPopup() {
  // Получаем элемент попапа и делаем его видимым
  var popup = document.querySelector('.popup-2');
  if (popup) {
    popup.style.display = 'block'; // Показываем попап
    popup.style.zIndex = '2999'; // Устанавливаем z-index
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var popupButton = document.querySelector('.button__popup_2'); 
  if (popupButton) {
    popupButton.addEventListener('click', function() {
      var popups = document.querySelectorAll('.popup-2, .popup');
      popups.forEach(function(popup) {
        popup.style.display = 'none';
      });

      var banner = document.querySelector('.banner');
      if (banner) {
        banner.style.display = 'block';
        setTimeout(function() {
          banner.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Задержка может помочь убедиться, что баннер видим перед скроллом
      }
    });
  }
});


