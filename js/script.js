function renderMainPage(){
    const mainP = document.querySelector('#main--screen')
    mainP.style.opacity = '1'
}
renderMainPage()

function nextPage(){
    let page1 = document.querySelector("#section--introduction")
    let page2 = document.querySelector("#section--second-page")
    page1.style.top = '-800px'
    page2.style.top = '0'
}