let buttontop = document.getElementById('buttontest')
buttontop.addEventListener('click', scrollWindow)
window.scrollTo(0, 0)

window.onbeforeunload =teste1
window.onload = scrollWindow
window.onunload =teste3

document.onbeforeunload =teste4
document.onload =teste5
document.onunload =teste6

function avancar(){
    let first = document.getElementById('first')
    let second = document.getElementById('second')
    console.log(first)
    first.style.top = '-500px';
    second.style.opacity = '1'
    second.style.top = '0'
}

function scrollWindow(){
    window.scrollTo(0, 0) 
    console.log('funcionou')
}

function teste1 (){console.log ('teste1')}
function teste2 (){console.log ('teste2')}
function teste3 (){console.log ('teste3')}
function teste4 (){console.log ('teste4')}
function teste5 (){console.log ('teste5')}
function teste6 (){console.log ('teste6')}