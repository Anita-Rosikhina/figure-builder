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
    resort()
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
                    <div class="block_btn_delete_date">
                        <p>${hours}:${minutes}</p>
                        <button class="btn_delete" onclick="removeElement()">Х</button>
                    </div>
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
                <div class="block_btn_delete_date">
                    <p>${hours}:${minutes}</p>
                    <button class="btn_delete" onclick="removeElement()">Х</button>
                </div>
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
                <div class="block_btn_delete_date">
                    <p>${hours}:${minutes}</p>
                    <button class="btn_delete" onclick="removeElement()">Х</button>
                </div>              
            </div>`
        break
        case 'trapezoid':
            list.innerHTML += `
            <div class="block" data-number="${serialNumber}">
                <p>${serialNumber}</p>
                <div
                    class="trapezoid"
                    style="border-bottom-color: ${color}; animation-name: ${rotation}">
                </div>
                <div class="block_btn_delete_date">
                    <p>${hours}:${minutes}</p>
                    <button class="btn_delete" onclick="removeElement()">Х</button>
                </div>                
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

function resort() {
    const arr = Array.from(document.querySelectorAll('.block'))
    let sorted = arr.sort((a, b) => {
        if(+a.attributes['data-number'].value < +b.attributes['data-number'].value) return -1;
        if(+a.attributes['data-number'].value > +b.attributes['data-number'].value) return 1;
        return 0;
    })
    sorted.forEach(e => list.appendChild(e));
}

function reset() {
    document.form.reset()
}