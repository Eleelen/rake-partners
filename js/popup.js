document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.hero__button a');
    var popup = document.querySelector('.popup');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.toggle('hidden');
    });
});
