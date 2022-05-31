let listBtnVal = document.querySelectorAll(".btn__value")
let visor = document.querySelector(".input__val")
let cleanVisor = document.querySelector(".btnDel")

cleanVisor.addEventListener("click", function () {
    visor.value = ""
})

for (let i = 0; i < listBtnVal.length; i++) {
    const tecla = listBtnVal[i]
    tecla.onclick = (e) => {
        valType = e.target.textContent;
        visor.value = `${visor.value}` + `${valType}`;
    }
}

function plus() {

}

function minus() {

}

function multiply() {

}

function divider() {

}
