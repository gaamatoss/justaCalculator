const btnValue = document.querySelectorAll(".btn__value")
const btnOperation = document.querySelectorAll(".btn__simbol")
const visorCalc = document.querySelector(".input__val")
const cleanVisor = document.querySelector(".btnDel")
const cleanStr = document.querySelector(".btnDel__str")
const equal = document.querySelector('.equal')


cleanVisor.addEventListener("click", function () {
    visorCalc.value = ""
    // let visorValue = visorCalc.innerHTML
    // visorValue.substring(0, visorValue.length - 1)
})

cleanStr.addEventListener("click", function () {
    // console.log('clicado');
    let visorValue = visorCalc.value
    visorCalc.value = visorValue.substring(0, visorValue.length - 1)
    // console.log(visorValue.substring(0, visorValue.length - 1))
})

equal.addEventListener("click", function () {
    if (visorCalc.value.length == 0) {
        console.log('Digite alguma expressao');
    } else {
        let valueCalc = visorCalc.value
        let result = eval(valueCalc)
        visorCalc.value = result
        console.log(result);
    }
})

btnValue.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        valType = e.target.textContent;
        visorCalc.value = `${visorCalc.value}` + `${valType}`;
    })
})

function soma() {
    let op = []
    let op1 = visorCalc.value
    op.push(op1)
    visorCalc.value = ""
    console.log(op);
}