let page1 = document.querySelector("#section--introduction")
let page2 = document.querySelector("#section--second-page")
let pageApp = document.querySelector('#application')
let delay_ms = 26
let delayDisplay = 500
renderMainPage()

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
        console.log(scrollY)
    }, delay_ms);
});

function renderMainPage(){
    const mainP = document.querySelector('#main--screen')
    mainP.style.opacity = '1'
    createButtons()
}

function createButtons() {
    let button1 = document.querySelector('#button1');
    let buttonStart = document.querySelector('#button-start');

    button1.addEventListener('click', nextPage);
    buttonStart.addEventListener('click', startApp);
}

function nextPage(){
    page1.style.top = '-800px'
    page2.style.top = '0'
}

function startApp(){
    let mainScreen = document.querySelector('#main--screen')
    mainScreen.style.transition = 'opacity .5s, display 2s'
    hideMain()
    mainScreen.style.opacity = 0
}

function hideMain(){
    let mainScreen = document.querySelector('#main--screen')
    let firstFooter = document.querySelector('#first--footer')
    setTimeout(function(){
        pageApp.style.display = 'block'
        
        mainScreen.style.display = 'none'
        mainScreen.innerHTML = ''
        
        document.body.style.overflow = 'scroll'
        
        pageApp.style.opacity = 1
        pageApp.style.zIndex = 2

        firstFooter.style.display = 'none'
        firstFooter.innerHTML = ''
    }, delayDisplay)
}