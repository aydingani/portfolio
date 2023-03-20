let arrButton = []

const washCar = document.getElementById("btn-10")
const mowLawn = document.getElementById("btn-20")
const pullWeeds = document.getElementById("btn-30")

let carCost = document.getElementById("car-cost")
let lawnCost = document.getElementById("lawn-cost")
let weedCost = document.getElementById("weed-cost")

const carEl = document.getElementById('car-el')
const lawnEl = document.getElementById('lawn-el')
const weedEl = document.getElementById('weed-el')

let sum = document.getElementById("sum")
sum.textContent = 0

let totalSpent = document.getElementById("total-spent")
const sendBtn = document.getElementById("send-btn")
// let taskList = document.getElementById("task-list")
// let totalList = document.getElementById("total-list")

let carBtn = false
let lawnBtn = false
let weedBtn = false


washCar.addEventListener("click", function() {
    if(!carEl.innerHTML) {
        carEl.innerHTML = 
        `
            <li class="task-final">Wash Car<button id="remove-btn" onclick="removeCar()">Remove</button></li>
        `
        carCost.innerHTML += 
        `
            <li class="cost-final"><span style="color: #9e9ca8">$</span>10</li>
        `
        let summ = sum.textContent*1
        value = 10
        sum.textContent = summ + value
    }
})

mowLawn.addEventListener("click", function() {
    if(!lawnEl.innerHTML) {
        lawnEl.innerHTML = 
        `
            <li class="task-final">Mow Lawn<button id="remove-btn"  onclick="removeLawn()">Remove</button></li>
        `
        lawnCost.innerHTML += 
        `
            <li class="cost-final"><span style="color: #9e9ca8">$</span>20</li>
        `
        let summ = sum.textContent*1
        value = 20
        sum.textContent = summ + value
    }
})

pullWeeds.addEventListener("click", function() {
    if(!weedEl.innerHTML) {
        weedEl.innerHTML = 
        `
            <li class="task-final">Pull Weeds<button id="remove-btn"  onclick="removeWeed()">Remove</button></li>
        `    
        weedCost.innerHTML += 
        `
            <li class="cost-final"><span style="color: #9e9ca8">$</span>30</li>
        `
        let summ = sum.textContent*1
        value = 30
        sum.textContent = summ + value       
    }
})

function removeCar() {
    carEl.innerHTML = ""
    carCost.innerHTML = ""
    sum.textContent -= 10
}

function removeLawn() {
    lawnEl.innerHTML = ""
    lawnCost.innerHTML = ""
    sum.textContent -= 20
}

function removeWeed() {
    weedEl.innerHTML = ""
    weedCost.innerHTML = ""
    sum.textContent -= 30
}

sendBtn.addEventListener("click", function() {
    carEl.innerHTML = ""
    lawnEl.innerHTML = ""
    weedEl.innerHTML = ""
    carCost.innerHTML = ""
    lawnCost.innerHTML = ""
    weedCost.innerHTML = ""
    sum.textContent = 0
})