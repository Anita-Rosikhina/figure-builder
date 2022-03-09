let list = document.querySelector('.list')
let btnSubmit = document.querySelector('.btn_submit')
let serialNumber = document.form.number
let typeFigure = document.form.type
let rotation = document.form.rotation
let color = document.form.color
let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()

btnSubmit.addEventListener('click', () => {
    createElement(serialNumber.value,typeFigure.value, rotation.value, color.value)
    reset()
})

function createElement (serialNumber, typeFigure, rotation, color) {
    switch (typeFigure) {
        case 'triangle':
            list.innerHTML += `
                <div class="block">
                    <p>${serialNumber}</p>
                    <div
                        class="triangle"
                        style="border-bottom-color: ${color}; animation-name: ${rotation}">
                    </div>
                    <p>${hours}:${minutes}</p>
                </div>`
            break
        case 'square':
            list.innerHTML += `
            <div class="block">
                <p>${serialNumber}</p>
                <div
                    class="square"
                    style="background: ${color}; animation-name: ${rotation}">
                </div>
                <p>${hours}:${minutes}</p>
            </div>`
        break
        case 'parallelogram':
            list.innerHTML += `
            <div class="block">
                <p>${serialNumber}</p>
                <div
                    class="parallelogram"
                    style="background: ${color}; animation-name: ${rotation}">
                </div>
                <p>${hours}:${minutes}</p>
            </div>`
        break
        case 'trapezoid':
            list.innerHTML += `
            <div class="block">
                <p>${serialNumber}</p>
                <div
                    class="trapezoid"
                    style="border-bottom-color: ${color}; animation-name: ${rotation}">
                </div>
                <p>${hours}:${minutes}</p>
            </div>`
        break
    }
}

function reset() {
    document.form.reset()
}