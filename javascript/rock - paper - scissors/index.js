let hands = ["rock", "paper", "scissor"]

function randomise() {
    let random = Math.floor(Math.random() * 3)
    return hands[random]
}

console.log(randomise())
