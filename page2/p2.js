const buttons = []
let slBts = []
const inputs = {
    input1: document.querySelector('#id-valor'),
    input2: document.querySelector('#id-valor2')
}

let chosenValues = {
    v1: undefined,
    v2: undefined
}

let results = []
let ulsValues =[]

const div = document.querySelector('#div-results')

document.addEventListener('DOMContentLoaded', function(){
    startButtons()
    let x = document.getElementsByTagName('main');
    x[0].style.opacity = 1
})

let ul = '';


function startButtons(){
    /*Sent*/
    for (let i=0; i<=5 ; i++){        
        buttons[i] = document.getElementById(`bt${i+1}`)
        buttons[i].addEventListener('click', function(){
            getValues()
            if(chosenValues.v1 === ''|| chosenValues.v2 === ''){
                window.alert('Digite os dois valores!')
            } else {
                chosenValues.v1 = Number(chosenValues.v1)
                chosenValues.v2 = Number(chosenValues.v2)
                if (!Number.isInteger(chosenValues.v1) && !Number.isInteger(chosenValues.v2)) {
                    alert('Apenas números inteiros! (sem vírgula)')
                }else{
                    if ((chosenValues.v1 || chosenValues.v2) > 999 || (chosenValues.v2 || chosenValues.v1) < -999){
                        alert("Os valores não podem ser maiores que 999 nem menores que -999")
                    }else{
                        let x = undefined
                        switch (i){
                            case 0:
                                results.push(chosenValues.v1 > chosenValues.v2)
                                x = results.length-1
                                op = '>'
                                ulsValues.push(createUls(op, results[x], chosenValues.v1, chosenValues.v2))
                                createLis(x)
                                break
                            case 1:
                                results.push(chosenValues.v1 < chosenValues.v2)
                                x = results.length-1
                                op = '<'
                                ulsValues.push(createUls(op, results[x], chosenValues.v1, chosenValues.v2))
                                createLis(x)
                                break
                            case 2:
                                results.push(chosenValues.v1 >= chosenValues.v2)
                                x = results.length-1
                                op = '≥'
                                ulsValues.push(createUls(op, results[x], chosenValues.v1, chosenValues.v2))
                                createLis(x)
                                break
                            case 3:
                                results.push(chosenValues.v1 <= chosenValues.v2)
                                x = results.length-1
                                op = '≤'
                                ulsValues.push(createUls(op, results[x], chosenValues.v1, chosenValues.v2))
                                createLis(x)
                                break
                            case 4:
                                results.push(chosenValues.v1 === chosenValues.v2)
                                x = results.length-1
                                op = '='
                                ulsValues.push(createUls(op, results[x], chosenValues.v1, chosenValues.v2))
                                createLis(x)
                                break
                            case 5:
                                results.push(chosenValues.v1 != chosenValues.v2)
                                x = results.length-1
                                op = '≠'
                                ulsValues.push(createUls(op, results[x], chosenValues.v1, chosenValues.v2))
                                createLis(x)
                                break
                    }
                    }
                }
            }
        })
    }
}

function getValues(){
    chosenValues.v1 = inputs.input1.value
    chosenValues.v2 = inputs.input2.value
}

function createUls(operator, trueOrFalse, value1, value2){
    ul = document.createElement("ul")
    ul.setAttribute('id', 'results'+results.length)
    div.appendChild(ul)
    return{
        operator, trueOrFalse, value1, value2
    }
}

function createLis(y){
    let liV1 = document.createElement('li')
    let liOp = document.createElement('li')
    let liV2 = document.createElement('li')
    let liAns = document.createElement('li')

    liAns.classList.add(tOrF(y))
    liV1.classList.add('first', 'chosen-values')
    liV2.classList.add('chosen-values')
    
    liV1.innerHTML = ulsValues[y].value1
    liOp.innerHTML = ulsValues[y].operator
    liV2.innerHTML = ulsValues[y].value2
    liAns.innerHTML = ulsValues[y].trueOrFalse
    ul.appendChild(liV1); ul.appendChild(liOp); ul.appendChild(liV2); ul.appendChild(liAns)
    addBooleanButtons()
}

function tOrF(y){
    ans = ulsValues[y].trueOrFalse === true ? 'r-true' : 'r-false';
    return ans
}





// function addBooleanButtons(){
//     let divBoolean = document.getElementById('boolean-button').innerHTML
//     let newDiv = document.createElement('div')

//     newDiv.setAttribute('id', 'boolean-button'+results.length)
//     newDiv.innerHTML = divBoolean
    
//     newDiv.classList.add('boolean-buttons')
//     let thisButtons = newDiv.getElementsByClassName('sl')
    
//     for(let i = 0; i < thisButtons.length; i++) {
//         thisButtons[i].addEventListener('click', function(){
//             thisButtons[i].classList.add('activated')
//             if (i===1)
//             {thisButtons[0].classList.remove('activated')
//             slBts.push('||')
//             }
//             else
//             {thisButtons[1].classList.remove('activated')}
//         })
//     }
//     div.appendChild(newDiv)
// }