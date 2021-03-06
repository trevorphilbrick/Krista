let mobile = matchMedia("(max-width: 767px)");
let cardMobile = document.querySelector('.card-mobile');
let cardTablet = document.querySelector('.card-tablet');

//event
mobile.addEventListener('change', mediaQueryClasses)

//functions

function mediaQueryClasses(mobile) {

    if (mobile.matches) {
        cardTablet.style.setProperty('display', 'none');
        cardMobile.style.setProperty('display', 'flex');
    }
    else {
        cardTablet.style.setProperty('display', 'flex');
        cardMobile.style.setProperty('display', 'none');
    }

}