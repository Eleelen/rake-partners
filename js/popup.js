document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.hero__button a, .button__contact a');
    var popup = document.querySelector('.popup');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            popup.classList.toggle('hidden'); // Переключаем видимость попапа
        });
    });
window.closeModal = function() {
        console.log('Закрытие попапа');
        popup.classList.add('hidden');
        console.log('После закрытия: ', popup.classList.contains('hidden'));
    }
});


document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.button__video');
  var popupVideo = document.querySelector('.popup-video');
  var closeBtn = document.querySelector('.video-close');
  var videoIframe = popupVideo.querySelector('iframe');
  var originalSrc = videoIframe.src; // Сохраняем исходный адрес видео для восстановления

  button.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    popupVideo.classList.toggle('hiddenp'); // Переключаем видимость видео попапа
    if (!popupVideo.classList.contains('hiddenp')) {
      videoIframe.src = originalSrc; // Перезагружаем видео при открытии
    }
  });

  closeBtn.addEventListener('click', function() {
    popupVideo.classList.add('hiddenp'); // Скрываем видео попап при клике на крестик
    videoIframe.src = ''; // Останавливаем видео путём очистки src
  });

  popupVideo.addEventListener('click', function(event) {
    if (event.target === popupVideo) {
      popupVideo.classList.add('hiddenp');
      videoIframe.src = ''; // Останавливаем видео путём очистки src
    }
  });

  document.querySelector('.video-popup-content').addEventListener('click', function(event) {
    event.stopPropagation(); // Предотвращаем закрытие при клике внутри контента
  });
});

