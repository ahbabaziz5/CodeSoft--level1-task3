
let input = document.getElementById("input")
function calc(number){
    input.value += number
}
function clr(){
    input.value = " "
}
function equals(){
    input.value = eval(input.value)
}
