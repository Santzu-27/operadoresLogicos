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

const div = document.querySelector('#div-results')
const uls = {
    n1: document.getElementById('c-number'),
    n2: document.getElementById('c-number2'),
    operators: document.getElementById('chosen-op'),
    ulResult: document.getElementById('true-or-false'),
}

const buttonSent = document.querySelector('#button-sent');

document.addEventListener('DOMContentLoaded', startButtons)
document.addEventListener('DOMContentLoaded', function(){
    let x = document.getElementsByTagName('main');
    x[0].style.opacity = 1
})


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
                if (!Number.isInteger(chosenValues.v1 || chosenValues.v2)) {
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
                                createUls(results[x], op)
                                break
                            case 1:
                                results.push(chosenValues.v1 < chosenValues.v2)
                                x = results.length-1
                                op = '<'
                                createUls(results[x], op)
                                break
                            case 2:
                                results.push(chosenValues.v1 >= chosenValues.v2)
                                x = results.length-1
                                op = '≥'
                                createUls(results[x], op)
                                break
                            case 3:
                                results.push(chosenValues.v1 <= chosenValues.v2)
                                x = results.length-1
                                op = '≤'
                                createUls(results[x], op)
                                break
                            case 4:
                                results.push(chosenValues.v1 === chosenValues.v2)
                                x = results.length-1
                                op = '='
                                createUls(results[x], op)
                                break
                            case 5:
                                results.push(chosenValues.v1 != chosenValues.v2)
                                x = results.length-1
                                op = '≠'
                                createUls(results[x], op)
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

function createUls(A, B){
    let liN = document.createElement('li')
    liN.innerHTML = chosenValues.v1
    uls.n1.appendChild(liN)
    liN.classList.add('chosen-values')

    liN = document.createElement('li')
    liN.classList.add('chosen-values')
    liN.innerHTML = chosenValues.v2
    uls.n2.appendChild(liN)

    liN = document.createElement('li')
    liN.classList.add('middle')
    liN.innerHTML = B
    uls.operators.appendChild(liN)

    liN = document.createElement('li')
    liN.innerHTML = A
    if (A){liN.classList.add('r-true')} else {liN.classList.add('r-false')}
    uls.ulResult.appendChild(liN)
}
