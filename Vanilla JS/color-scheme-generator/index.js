// let colorPicker = document.getElementById("color-picker")
let getColors = document.getElementById("get-colors")
let colorSection = document.getElementById("color-section")

getColors.addEventListener("click", function() {
    let colorPicker = document.getElementById("color-picker").value.substr(-6)
    let mode = document.getElementById("mode").value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        let colorHtml = ''
        const colorHtmlArr = data.colors.map((color) => {
            colorHtml += `
            <div class="color-container">
                <div class="color-show" style="background-color: ${color.hex.value}">
                </div>
                <p class="color-id">${color.hex.value}</p>
            </div>
            `
        }).join("")
        colorSection.innerHTML = colorHtml
    })
})