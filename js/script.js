let page1 = document.querySelector("#section--introduction")
let page2 = document.querySelector("#section--second-page")
let footer = document.getElementsByTagName('footer')
let delay_ms = 15

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
        console.log(scrollY)
    }, delay_ms);
});

function renderMainPage(){
    const mainP = document.querySelector('#main--screen')
    mainP.style.opacity = '1'
    
}

function nextPage(){
    page1.classList.remove('in-top')
    page1.classList.add('in-upper')
    page2.classList.remove('in-bottom')
    page2.classList.add('in-top')
}