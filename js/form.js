window.onmessage = (event) => {
    if (typeof event.data === 'object' && event.data) {
        const ui = event.data.name;
        console.log("Received data: ", event.data);

        switch (ui) {
            case "ui:confirm_signup":
                hidePopupMain(); 
                showPopup(); 
                reloadFrame(); 
                break;
            case "ui:open_login":
                document.location.href = 'https://rakebit.com/signup?landing=registration';
                break;
        }
    }
}

function temporarilyDisableAlert() {
    const originalAlert = window.alert;
    window.alert = function() {};

    setTimeout(() => {
        window.alert = originalAlert;
    }, 5000); 
}

function reloadFrame() {
    temporarilyDisableAlert(); 

    var myFrameContainer = document.querySelector('div#TRUE_SIGNUP_FRAME');
    if (myFrameContainer) {
        var oldFrame = myFrameContainer.querySelector('iframe');
        if (oldFrame) {
            var baseSrc = 'https://rakebit.com/signup?landing=registration';
            var unique = new Date().getTime() + Math.random().toString(36).substr(2, 9);
            var newFrame = document.createElement('iframe');
            newFrame.src = baseSrc + '#signup&reload=' + unique;
            newFrame.onload = function() {
                let action = {
                    name: 'action:add_style',
                    href: './../css/style.css'
                };
                newFrame.contentWindow.postMessage(action, '*');
            };
            myFrameContainer.replaceChild(newFrame, oldFrame);
        }
    }
}


window.addEventListener('load', function () {
  let myFrame = document.querySelector('div#TRUE_SIGNUP_FRAME');

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
   var popup = document.querySelector('.popup');
    if (popup) {
        popup.classList.add('hidden');
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