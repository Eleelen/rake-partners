window.onmessage = (event) => {
  if (typeof event.data === 'object') {
    const ui = event.data.name;
    console.log(event.data);

    switch (ui) {
      case "ui:confirm_signup":
        hideFrame();
        showPopup();
        break;
      case "ui:open_login":
        document.location.href = 'https://preprod.rakebit.com/signup?landing=registration#signup';
        break;
    }
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

function hideFrame() {
  var myFrame = document.querySelector('iframe#TRUE_SIGNUP_FRAME');
  if (myFrame) {
    myFrame.style.display = 'none';
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
        popup.style.display = 'none';
      });

      var banner = document.querySelector('.banner');
      if (banner) {
        banner.style.display = 'block';
        banner.scrollIntoView({ behavior: 'smooth' });
      }

      // Перезагрузка страницы после закрытия попапа, если нужно
      setTimeout(function() {
        window.location.reload();
      }, 5000); // Делаем задержку перед перезагрузкой
    });
  }
});
