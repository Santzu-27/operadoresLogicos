const buttons = []

const inputs = {
    input1: document.querySelector('#id-valor'),
    input2: document.querySelector('#id-valor2')
}
let chosenValues = {
    v1: undefined,
    v2: undefined
}
let results = []
let paragraphs = []
const div = document.querySelector('#div-results')

const buttonSent = document.querySelector('#button-sent');

document.addEventListener('DOMContentLoaded', startButtons)


function startButtons(){
    /*Sent*/
    for (let i=0; i<=5 ; i++){        
        buttons[i] = document.getElementById(`bt${i+1}`)
        buttons[i].addEventListener('click', function(){
            getValues()
            if(chosenValues.v1 === ''|| chosenValues.v2 === ''){
                window.alert('Digite os dois valores!')
            } else{
                chosenValues.v1 = Number(chosenValues.v1)
                chosenValues.v2 = Number(chosenValues.v2)
                switch (i){
                    case 0:
                        results.push(chosenValues.v1 > chosenValues.v2)
                        let currentP = createParagraphs()

                        paragraphs[currentP].innerHTML = `aaaa`

                        break
                    case 1:
                        console.log(valores.v1.value < valores.v2.value)
                        break
                    case 2:
                        console.log(valores.v1.value >= valores.v2.value)
                        break
                    case 3:
                        console.log(valores.v1.value <= valores.v2.value)
                        break
                    case 4:
                        console.log(valores.v1.value === valores.v2.value)
                        break
                    case 5:
                        console.log(valores.v1.value != valores.v2.value)
                        break
                }
            }
        })
    }
}

function getValues(){
    chosenValues.v1 = inputs.input1.value
    chosenValues.v2 = inputs.input2.value
}

function trueOrFalse(x){
    if (x === true){
        document.querySelector(".result-logic").classList.add('r-true')
    }else{
        document.querySelector(".result-logic").classList.add('r-false')
    }
}

function createParagraphs(x){
    paragraphs.push(document.createElement('p'))
    x = paragraphs.length-1

    paragraphs[x].setAttribute('id', `pg${paragraphs.length}`)

    div.appendChild(paragraphs[x])
    return x
}