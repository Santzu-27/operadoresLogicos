function renderMainPage(){
    const mainP = document.querySelector('.start')
    mainP.classList.remove('start')
    mainP.classList.add('render')
}
renderMainPage()

function renderApp(){
    let mainHeader = document.querySelector ('#main-header');
    let startingPage = document.querySelector('#starting-page');
    mainHeader.classList.add('hide') 
    startingPage.classList.add('hide')
}