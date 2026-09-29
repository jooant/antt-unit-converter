/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let myValue = "" 

const inputEl = document.getElementById("input-value")
const convertBtn = document.getElementById("btn-convert")
const lengthEl = document.getElementById("length-convert")
const volumeEl = document.getElementById("volume-convert")
const massEl = document.getElementById("mass-convert")
const valueFromLocalStorage = JSON.parse(localStorage.getItem("inputValue"))


convertBtn.addEventListener("click", () => {
    myValue =  inputEl.value
    localStorage.setItem("inputValue", JSON.stringify(myValue))
    render(myValue)
})



function render(myValue){
    lengthEl.innerHTML = `<p>${myValue} meters = ${Number(myValue) * 3.2808} feet | ${myValue} feet = ${Math.round(Number(myValue) * 0.3048 * 1000)/1000} meters</p>`
    volumeEl.innerHTML = `<p>${myValue} liters = ${Math.round(Number(myValue) * 0.2642 * 1000)/1000} gallons | ${myValue} gallon = ${Math.round(Number(myValue) * 3.7854 * 1000)/1000} liters</p>`
    massEl.innerHTML = `<p>${myValue} kilos = ${Math.round(Number(myValue) * 2.2046 * 1000)/1000} pounds | ${myValue} pounds = ${Math.round(Number(myValue) * 0.4535 * 1000)/1000} kilos</p>`
}
