let list = document.querySelector('.list')
let btnSubmit = document.querySelector('.btn_submit')
let serialNumberOption = document.getElementById('serialNumberOption')
let serialFigureTypesSelect = document.getElementById('serialFigureTypes')
let serialNumberSelect = document.form.number
let typeFigure = document.form.type
let rotation = document.form.rotation
let color = document.form.color
const AMOUNT_OF_OPTIONS = 10
const elements = []
const figureTypes = ['square', 'triangle', 'parallelogram', 'trapezoid']

btnSubmit.addEventListener('click', () => {
    elements.push({
        typeFigure: typeFigure.value,
        serialNumber: serialNumberSelect.value,
        rotation: rotation.value,
        color: color.value,
        date: new Date().toLocaleTimeString()
    })
    resetForm()
    resortListOfItems()
    renderListOfItems()
    updateSelectOptions()
})

function createElement({serialNumber, typeFigure, rotation, color, date}) {
    switch (typeFigure) {
        case 'triangle':
            return createTriangle({serialNumber, rotation, color, date})
        case 'square':
            return createSquare({serialNumber, rotation, color, date})
        case 'parallelogram':
            return createParallelogram({serialNumber, rotation, color, date})
        case 'trapezoid':
            return createTrapezoid({serialNumber, rotation, color, date})
    }
}

function removeElement(serialNumber) {
    const i = elements.findIndex(el => +el.serialNumber === serialNumber)
    elements.splice(i, 1)
    renderListOfItems()
    updateSelectOptions()
}

function createTriangle({serialNumber, rotation, color, date}) {
    const figure = `<div class="triangle" style="border-bottom-color: ${color}; animation-name: ${rotation}"></div>`
    return generateListItem({figure, serialNumber, date})
}

function createSquare({serialNumber, rotation, color, date}) {
    const figure = `<div class="square" style="background: ${color}; animation-name: ${rotation}"></div>`
    return generateListItem({figure, serialNumber, date})
}

function createParallelogram({serialNumber, rotation, color, date}) {
    const figure = `<div class="parallelogram" style="background: ${color}; animation-name: ${rotation}"></div>`
    return generateListItem({figure, serialNumber, date})
}

function createTrapezoid({serialNumber, rotation, color, date}) {
    const figure = `<div class="trapezoid" style="border-bottom-color: ${color}; animation-name: ${rotation}"></div>`
    return generateListItem({figure, serialNumber, date})
}

function generateListItem({figure, serialNumber, date}) {
    return `<div class="block">
            <p>${serialNumber}</p>
            ${figure}
            <div class="block_btn_delete_create_date">
                <p>${date}</p>
                <button class="btn_delete" onclick="removeElement(${serialNumber})">Х</button>
            </div>
        </div>`
}

function resortListOfItems() {
     elements.sort((a, b) => {
        const prevValue = +a.serialNumber
        const nextValue = +b.serialNumber
        if(prevValue < nextValue) return -1
        if(prevValue > nextValue) return 1
        return 0
    })
}

function renderListOfItems() {
    list.innerHTML = ''
    elements.forEach(el => {
        list.insertAdjacentHTML('beforeend', this.createElement(el))
    })
}

function updateSelectOptions() {
    const list = getAvailableSelectNumberOptions()
    renderSelectOptions(list)
    disableButton(list)
}

function getAvailableSelectNumberOptions() {
    const numberOptions = Array.from({ length: AMOUNT_OF_OPTIONS}, (_, i) => i + 1)
    const serialNumbers = elements.map(e => +e.serialNumber)
    return numberOptions.filter(e => !serialNumbers.includes(e))
}

function renderSelectOptions(list) {
    serialNumberOption.innerHTML = ''
    list.forEach(serialNumber => {
        const option = createOption(serialNumber, serialNumber)
        serialNumberOption.appendChild(option)
    })
}

function resetForm() {
    document.form.reset()
}

function disableButton(list) {
    btnSubmit.disabled = !list.length
}

function createOption(value, text) {
    const option = document.createElement('option')
    option.value = value
    option.text = text
    return option
}

function generateFigureTypes(types) {
    types.forEach(el => {
        serialFigureTypesSelect.appendChild(this.createOption(el, el))
    })
}
generateFigureTypes(figureTypes)

function initForm() {
    this.updateSelectOptions()
}
initForm()