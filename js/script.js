function renderMainPage(){
    const mainP = document.querySelector('.start')
    mainP.classList.remove('start')
    mainP.classList.add('render')
}
renderMainPage()

function renderApp(){
    let initialScreen = document.querySelectorAll('.render')
    console.log(initialScreen)
    for (let i = 0; i < initialScreen.length; i++){
        initialScreen[i].classList.add('animate__animated', 'animate__slideOutUp')
    }

    let secondPage = document.querySelector('#section--second-page')
    secondPage.style.display = 'block'
    secondPage.classList.remove('in-bottom')
    secondPage.classList.add('to-top')
    // secondPage.classList.add('animate__animated', 'animate__slideInUp', 'to-top')
}