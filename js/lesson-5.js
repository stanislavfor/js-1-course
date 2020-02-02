"use strict";

// решение по заданию 1

function createSomeDOM() {
    let newNav = document.createElement('div')
    let newLogo = document.createElement('h3')
    let newWrapper = document.createElement('section')

    newNav.style.background = 'black'
    newNav.style.width = '1200px'
    newNav.style.height = '50px'
    newNav.style.marginTop = '50px'

    newLogo.style.paddingTop = '13px'
    newLogo.style.color = 'white'
    newLogo.style.marginLeft = '50px'
    newLogo.innerText = 'E-SHOP'

    newWrapper.style.display = 'flex'
    newWrapper.style.flexFlow = 'row wrap'
    newWrapper.style.justifyContent = 'space-around'
    newWrapper.style.width = '1000px'
    newWrapper.style.margin = '100px'

    let numberOfSections = 8
    for (let ind = 1; ind <= numberOfSections; ind++) {

        let newDiv = document.createElement('div')
        let newTextBlock = document.createElement('div')
        let newTitle = document.createElement('h3')
        let newParagraph = document.createElement('p')
        let newButton = document.createElement('input')

        newDiv.id = 'id_' + ind

        newDiv.style.marginBottom = '10px'
        newDiv.style.width = '200px'
        newDiv.style.height = '300px'
        newDiv.style.border = '1px solid grey'
        newDiv.style.background = 'url("https://placehold.it/200x150") top center no-repeat'
        newDiv.style.borderRadius = '5px'
        newDiv.style.marginRight = '20px'
        newTextBlock.style.padding = '10px 0 0 10px'
        newTextBlock.style.marginTop = '150px'

        newTitle.innerText = 'Товар ' + ind

        newParagraph.innerText = 'цена: ' + ind + ' $'
        newParagraph.style.color = 'green'

        newButton.type = 'submit'
        newButton.value = 'Купить'
        newButton.style.background = 'black'
        newButton.style.color = 'white'
        newButton.style.background = 'black'
        newButton.style.width = '80px'
        newButton.style.height = '30px'
        newButton.style.borderRadius = '5px'

        document.body.appendChild(newNav)
        newNav.appendChild(newLogo)
        document.body.appendChild(newWrapper)
        newWrapper.appendChild(newDiv)
        newDiv.appendChild(newTextBlock)
        newTextBlock.appendChild(newTitle)
        newTextBlock.appendChild(newParagraph)
        newTextBlock.appendChild(newButton)
    }
}
createSomeDOM()




// элементы кода корзины из предыдущего задания

function cart() {

    let PRODUCT_NAMES = ['Процессор', 'Дисплей', 'Ноутбук', 'Мышь', 'Клавиатура']
    let PRICES = [100, 120, 1000, 15, 18]
    let IDS = [0, 1, 2, 3, 4]
    let products = []

    function createProduct(index) {

        return {
            product_name: PRODUCT_NAMES[index],
            price: PRICES[index],
            id_product: IDS[index]
        }
    }

    function createProductsDTO() {
        let length = IDS.length
        for (let i = 0; i < length; i++) {
            console.log(createProduct(i))
        }
    }

    let a = +prompt('Выберите товар по его номеру:\n' + 'Processor - 1,\nDisplay - 2,\nNotebook - 3,\nMouse - 4,\nKeyboard -5', 3)
    let index = (a - 1)

    let b = `Вы выбрали товар: ${PRODUCT_NAMES[index]} стоимостью ${PRICES[index]} единиц`
    console.log(b)

}