function renderMainPage(){
    const mainP = document.querySelector('.start')
    mainP.classList.remove('start')
    mainP.classList.add('render')
}
renderMainPage()

function renderApp(){
    let initialScreen = document.querySelector('#screen')
    initialScreen.classList.add('animate__animated')
    initialScreen.classList.add('animate__backOutUp')
    console.log('aaa' + initialScreen)
}