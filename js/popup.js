document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.hero__button a');
    var popup = document.querySelector('.popup');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button__contact a');
    var popup = document.querySelector('.popup');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.toggle('hidden');
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('openVideoPopup');
  const videoPopup = document.getElementById('videoPopup');
  const closeBtn = document.querySelector('.video-close');

  // Открытие попапа
  openBtn.addEventListener('click', function() {
    videoPopup.style.display = 'flex'; // Изменение 'none' на 'flex'
  });

  // Закрытие попапа
  closeBtn.addEventListener('click', function() {
    videoPopup.style.display = 'none';
  });

  // Закрытие попапа при клике вне контента
  videoPopup.addEventListener('click', function(event) {
    if (event.target === videoPopup) {
      videoPopup.style.display = 'none';
    }
  });

  // Предотвращение закрытия при клике внутри контента
  document.querySelector('.video-popup-content').addEventListener('click', function(event) {
    event.stopPropagation(); // Остановка всплывания события
  });
});
