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
                <div class="block" data-number="${serialNumber}">
                    <p>${serialNumber}</p>
                    <div
                        class="triangle"
                        style="border-bottom-color: ${color}; animation-name: ${rotation}">
                    </div>
                    <p>${hours}:${minutes}</p>
                    <button class="btn_delete" onclick="removeElement()">Х</button>
                </div>`
            break
        case 'square':
            list.innerHTML += `
            <div class="block" data-number="${serialNumber}">
                <p>${serialNumber}</p>
                <div
                    class="square"
                    style="background: ${color}; animation-name: ${rotation}">
                </div>
                <p>${hours}:${minutes}</p>
                <button class="btn_delete" onclick="removeElement()">Х</button>
            </div>`
        break
        case 'parallelogram':
            list.innerHTML += `
            <div class="block" data-number="${serialNumber}">
                <p>${serialNumber}</p>
                <div
                    class="parallelogram"
                    style="background: ${color}; animation-name: ${rotation}">
                </div>
                <p>${hours}:${minutes}</p>
                <button class="btn_delete" onclick="removeElement()">Х</button>
            </div>`
        break
        case 'trapezoid':
            list.innerHTML += `
            <div class="block" data-number="${serialNumber}">
                <p>number: ${serialNumber}</p>
                <div
                    class="trapezoid"
                    style="border-bottom-color: ${color}; animation-name: ${rotation}">
                </div>
                <p>${hours}:${minutes}</p>
                <button class="btn_delete" onclick="removeElement()">Х</button>
            </div>`
        break
    }
}

function removeElement() {
    document.querySelectorAll('.block').forEach((el, i) => {
        document.querySelectorAll('.btn_delete')[i].addEventListener('click', () => {
            document.querySelector(`.block[data-number="${el.attributes['data-number'].value}"]`).remove()
        })
    })
}

function reset() {
    document.form.reset()
}