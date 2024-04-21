function toggleFaq(event) {
    const faqItem = event.currentTarget.parentNode; 
    const content = faqItem.querySelector('.terms-content'); 
    const icon = faqItem.querySelector('.toggle-icon'); 


    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.style.transform = 'rotate(-180deg)'; 
    } else {
        content.style.display = 'none';
        icon.style.transform = 'rotate(0deg)'; 
    }
}