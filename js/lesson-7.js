"use strict"

let canvas = document.querySelector('#canv')
let ctx = canvas.getContext('2d')

let xCoord = document.querySelector('#x-coord')
let yCoord = document.querySelector('#y-coord')

let pencilColor, brushColor, fillColor

let editor = {
    container: '#app',
    width: canvas.getAttribute('width'),
    height: canvas.getAttribute('height'),
    currentTool: null,
    "color": '#000',
    "current-size-pencil": 5,
    "current-size-brush": 5,
    "current-font": 'Arial',
    x: 0,
    y: 0,

    _init() {
        document.querySelector(this.container).addEventListener('input', this.inputHandler)
        document.querySelector(this.container).addEventListener('click', this.clickHandler)

        canvas.addEventListener('mousemove', this.getCoordinates)
        canvas.addEventListener('mousedown', this.startDraw)
        canvas.addEventListener('mouseup', this.endDraw)
    },
    getCoordinates(evt) {
        editor.x = evt.offsetX
        editor.y = evt.offsetY

        xCoord.innerText = editor.x
        yCoord.innerText = editor.y
    },
    clickHandler(evt) {
        if (evt.target.name === 'tool-button') {
            editor.currentTool = evt.target.dataset.name
        }
        // Сохранение картинки canvas в файл png        
        if (evt.target.name === 'save-button') {
            console.log('save_button log')
            let dataURL = canvas.toDataURL("image/png")
            let link = document.createElement("a")
            document.body.appendChild(link)
            link.href = dataURL
            link.download = "image-canvas.png"
            link.click()
            document.body.removeChild(link)
        }
    },
    inputHandler(evt) {

        if (evt.target.name === 'input-obj-pencil') {
            editor[`current-${evt.target.dataset.name}`] = evt.target.value
            evt.target.dataset.name === 'color-pencil' ? pencilColor = editor['current-color-pencil'] : pencilColor = pencilColor
        }
        if (evt.target.name === 'input-obj-brush') {
            editor[`current-${evt.target.dataset.name}`] = evt.target.value
            evt.target.dataset.name === 'color-brush' ? brushColor = editor['current-color-brush'] : brushColor = brushColor
        }
        if (evt.target.name === 'input-obj-fill') {
            editor[`current-${evt.target.dataset.name}`] = evt.target.value
            evt.target.dataset.name === 'color-fill' ? fillColor = editor['current-color-fill'] : fillColor = fillColor
        }
        if (evt.target.name === 'input-obj') {
            editor[`current-${evt.target.dataset.name}`] = evt.target.value            
        }

        /*
        if (evt.target.id === 'select-color' || evt.target.id === 'select-size') {
         evt.target.id === 'select-color' ? editor.currentColor = evt.target.value : editor.brushSize = evt.target.value
        if (evt.target.id === 'select-color') ctx.fillStyle = editor.currentColor
         }
         */
    },
    startDraw() {
        if (editor.currentTool === 'pencil') editor._drawPencil()
        if (editor.currentTool === 'brush') editor._drawBrush()
        if (editor.currentTool === 'fill') editor._drawFill()
    },
    endDraw() {
        canvas.onmousemove = null
    },
    _drawPencil() {
        canvas.onmousemove = () => {
            ctx.fillStyle = [pencilColor]
            ctx.fillRect(editor.x, editor.y, editor['current-size-pencil'], editor['current-size-pencil'])
        }
    },
    _drawBrush() {
        canvas.onmousemove = () => {
            ctx.fillStyle = [brushColor]
            ctx.beginPath()
            ctx.ellipse(editor.x, editor.y, editor['current-size-brush'], editor['current-size-brush'], Math.PI / 4, 0, 2 * Math.PI)
            ctx.fill()
        }
    },
    _drawFill() {
        canvas.onmousemove = () => {
            ctx.fillStyle = [fillColor]
            ctx.fillRect(0, 0, editor.width, editor.height)
        }
    }
}

editor._init()