let list = document.querySelector('.list')
let btnSubmit = document.querySelector('.btn_submit')
let select = document.querySelector('select')
let serialNumberSelect = document.form.number
let typeFigure = document.form.type
let rotation = document.form.rotation
let color = document.form.color
const AMOUNT_OF_OPTIONS = 10

btnSubmit.addEventListener('click', () => {
    createElement(serialNumberSelect.value, typeFigure.value, rotation.value, color.value)
    reset()
    resort()
    updateSelectOptions()
})

function createElement(serialNumber, typeFigure, rotation, color) {
    switch (typeFigure) {
        case 'triangle':
            createTriangle(serialNumber, rotation, color)
        break
        case 'square':
            createSquare(serialNumber, rotation, color)
        break
        case 'parallelogram':
            createParallelogram(serialNumber, rotation, color)
        break
        case 'trapezoid':
            createTrapezoid(serialNumber, rotation, color)
        break
    }
}

function removeElement(serialNumber) {
    document.querySelector(`.block[data-number="${serialNumber}"]`).remove()
    updateSelectOptions()
}

function createTriangle(serialNumber, rotation, color) {
    list.innerHTML += `
        <div class="block" data-number="${serialNumber}">
            <p>${serialNumber}</p>
            <div
                class="triangle"
                style="border-bottom-color: ${color}; animation-name: ${rotation}">
            </div>
            <div class="block_btn_delete_create_date">
                <p>${new Date().toLocaleTimeString()}</p>
                <button class="btn_delete" onclick="removeElement(${serialNumber})">Х</button>
            </div>
        </div>`
}

function createSquare(serialNumber, rotation, color) {
    list.innerHTML += `
        <div class="block" data-number="${serialNumber}">
            <p>${serialNumber}</p>
            <div
                class="square"
                style="background: ${color}; animation-name: ${rotation}">
            </div>
            <div class="block_btn_delete_create_date">
                <p>${new Date().toLocaleTimeString()}</p>
                <button class="btn_delete" onclick="removeElement(${serialNumber})">Х</button>
            </div>
        </div>`
}

function createParallelogram(serialNumber, rotation, color) {
    list.innerHTML += `
        <div class="block" data-number="${serialNumber}">
            <p>${serialNumber}</p>
            <div
                class="parallelogram"
                style="background: ${color}; animation-name: ${rotation}">
            </div>
            <div class="block_btn_delete_create_date">
                <p>${new Date().toLocaleTimeString()}</p>
                <button class="btn_delete" onclick="removeElement(${serialNumber})">Х</button>
            </div>              
        </div>`
}

function createTrapezoid(serialNumber, rotation, color) {
    list.innerHTML += `
        <div class="block" data-number="${serialNumber}">
            <p>${serialNumber}</p>
            <div
                class="trapezoid"
                style="border-bottom-color: ${color}; animation-name: ${rotation}">
            </div>
            <div class="block_btn_delete_create_date">
                <p>${new Date().toLocaleTimeString()}</p>
                <button class="btn_delete" onclick="removeElement(${serialNumber})">Х</button>
            </div>                
        </div>`
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

function updateSelectOptions() {
    const arr = Array.from(document.querySelectorAll('.block'))
    const existingSerialNumbers = arr.map(el => +el.attributes['data-number'].value)
    const availableSerialNumbers =
        Array.from({length: AMOUNT_OF_OPTIONS}, (_, i) => i + 1)
            .filter(number => !existingSerialNumbers.includes(number))
    select.innerHTML = ''
    availableSerialNumbers.forEach(el => {
        select.innerHTML += `<option value="${el}">${el}</option>`
    })
    disabledBtnSubmit()
}

function reset() {
    document.form.reset()
}

function disabledBtnSubmit() {
    const arr = Array.from(document.querySelectorAll('.block'))
    if(arr.length >= AMOUNT_OF_OPTIONS) {
        btnSubmit.disabled = true
        btnSubmit.classList.add('disabled')
    } else {
        btnSubmit.disabled = false
        btnSubmit.classList.remove('disabled')
    }
}

function initForm(count) {
    const arr = Array.from({length: count}, (_, i) => i + 1)
    arr.forEach((number) => {
        select.innerHTML += `<option value="${number}">${number}</option>`
    })
}

initForm(AMOUNT_OF_OPTIONS)