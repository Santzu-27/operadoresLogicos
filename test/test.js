const buttons = []

document.addEventListener('DOMContentLoaded', startButtons)

function getButtons (){
    
}

function startButtons(){
    for (let i=0; i<=5 ; i++){
        buttons[i] = document.getElementById(`bt${i+1}`)
        buttons[i].addEventListener('click', function(){
            switch (i){
                case 0:
                    console.log('oi')
                    break
                case 1:
                    console.log('opa')
                    break
                default:
                    console.log('aaaw')
                    break
            }
        })
    }
}