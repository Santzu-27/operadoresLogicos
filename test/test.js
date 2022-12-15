const buttons = []
const values = {
    value 
}
document.addEventListener('DOMContentLoaded', getButtons)

function getButtons (){
    for (var i=0; i<=5 ; i++){
        buttons[i] = document.querySelector(`#bt${i+1}`)
    }
    startButtons()
}

function startButtons(){
    for (let i=0; i<=5 ; i++){
        buttons[i].addEventListener('click',{
            
        })
    }
}