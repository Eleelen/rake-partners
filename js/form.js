window.onmessage = (event) => {
  if (typeof event.data === 'object') {
    const ui = event.data.name;
    console.log(event.data); // Логирование данных для отладки

    switch (ui) {
      case "ui:confirm_signup":
        // Если регистрация успешна, показываем .banner
        showBanner();
        break;
      case "ui:response_signup":
        // Обработка ошибки регистрации
        handleSignupError(event.data.error);
        break;
      case "ui:open_login":
        document.location.href = 'https://preprod.rakebit.com/signup?landing=registration#signup';
        break;
    }
  }
}

window.addEventListener('load', function (event) {
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

function showBanner() {
  // Получаем элемент .banner и делаем его видимым
  var banner = document.querySelector('.banner');
  if (banner) {
    banner.style.display = 'block';
    document.location.href = './#banner';
  }
}
