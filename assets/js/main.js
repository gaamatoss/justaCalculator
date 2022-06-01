let btnValue = document.querySelectorAll(".btn__value")
let btnOperation = document.querySelectorAll(".btn__simbol")
let visor = document.querySelector(".input__val")
let cleanVisor = document.querySelector(".btnDel")
let equal = document.querySelector('.equal')


cleanVisor.addEventListener("click", function () {
    visor.value = ""
})

equal.addEventListener("click", function () {
    console.log(visor.value);
    operationCalc(operationType);
})

for (let i = 0; i < btnValue.length; i++) {
    const tecla = btnValue[i]
    tecla.onclick = (e) => {
        valType = e.target.textContent;
        visor.value = `${visor.value}` + `${valType}`;
    }
}

for (let i = 0; i < btnOperation.length; i++) {
    const tecla = btnOperation[i]
    tecla.onclick = (e) => {
        operationType = e.target.textContent;
        if (operationType == '+') {
            operationCalc(operationType);
        } else if (operationType == '-') {
            operationCalc(operationType);
        } else if (operationType == '*') {
            operationCalc(operationType);
        } else {
            operationCalc(operationType);
        }
    }
}


function operationCalc(operationType) {
    // let operationVal = []
    // let firstOp = visor.value + operationType
    // console.log("1: " + firstOp);
    // visor.value = ""

    // let secondOp = visor.value
    // console.log("2: " + secondOp);
    // let soma = a + b
    // console.log(soma);


}
