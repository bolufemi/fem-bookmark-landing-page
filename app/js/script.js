
const createOverlay = () => {
    const header = document.querySelector("header")
    const toggler = document.querySelector(".toggler")
    const navLogo = document.querySelector(".logo")
    toggler.addEventListener('click', () => {
        header.classList.toggle("menu-active");
        navLogo.classList.toggle("logo-filter")
    })
}
createOverlay();

function openContent(event, tabNumber) {
    const tabContent = document.querySelectorAll(".tab__content")
    event.preventDefault();
    tabContent.forEach(content => {
        content.style.display ="none"
    })
    const mq = window.matchMedia( "(min-width: 43em)" )
    if (mq.matches) {
        document.getElementById(tabNumber).style.display = "grid"
    }else {
        document.getElementById(tabNumber).style.display = "inherit"
    }
}

function faqToggle() {
    const faq = document.querySelectorAll(".faq");
    faq.forEach(q => {
        q.addEventListener('click', () => {
            q.classList.toggle("active")
        })
    })    
}
faqToggle();


function emailHandleError() {
    const emailSub = document.querySelector(".subscription form");
    const emailInput = document.querySelector(".email__input");
    const errorMessage = document.querySelector(".err__message");
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    emailSub.addEventListener('submit', (e) => {
        e.preventDefault();
        if (emailInput.value.match(regExp)) {
            errorMessage.style.display = 'none'
        }else {
            errorMessage.style.display = 'block'
        }
    })    
}
emailHandleError();