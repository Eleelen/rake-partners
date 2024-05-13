

  window.onmessage = (event) => {
    let ui = event.data;



    if (typeof ui === 'object') {
      ui = event.data.name;
      console.log(event.data);
    }

    switch (ui) {
      case "ui:confirm_signup":
        const token = event.data.token;
        document.location.href = `./`;
        break;
      case "ui:open_login":
        document.location.href = 'https://preprod.rakebit.com/signup?landing=registration#signup';
        break;
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
 