let page1 = document.querySelector("#section--introduction")
let page2 = document.querySelector("#section--second-page")
let footer = document.getElementsByTagName('footer')
let delay_ms = 20

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
    page1.style.top = '-800px'
    page2.style.top = '0'
}