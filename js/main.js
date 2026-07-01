const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    menuBtn.classList.toggle('menu__btn--active'); 
    document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        if (menu.classList.contains('menu--active')) {
            menu.classList.remove('menu--active');
            menuBtn.classList.remove('menu__btn--active');
            document.body.classList.remove('no-scroll');
        }
    });
});

const emailLink = document.getElementById('email-link');
if (emailLink) {
    const decodedEmail = atob('bXVyYXQwMDdAZ21haWwuY29t');
    
    emailLink.href = 'mailto:' + decodedEmail;
    emailLink.textContent = decodedEmail;
}

const phoneLink = document.getElementById('phone-link');
if (phoneLink) {
    const decodedPhoneLink = atob('Kzc5Mjg4MjI0MDQ5'); 
    
    const decodedPhoneText = atob('KzcgKDkyOCkgODIyIDQwIDQ5');

    phoneLink.href = 'tel:' + decodedPhoneLink;
    phoneLink.textContent = decodedPhoneText;
}
