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
    const emailUser = 'murat007';
    const emailDomain = 'gmail.com';
    const fullEmail = emailUser + '@' + emailDomain;
    emailLink.href = 'mai'+ 'lto:' + fullEmail;
    emailLink.textContent = fullEmail;
}

const phoneLink = document.getElementById('phone-link');
if (phoneLink) {
    const phone = '+79281007220';
    phoneLink.href = 'tel:' + phone;
    phoneLink.textContent = '+7 (928) 100-72-20';
}
