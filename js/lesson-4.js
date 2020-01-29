function task1() {
    console.log(getDigitsOfNumber())
    console.log('Hello from Task1.')
}

function task1_1() {
    console.log(getNumbers)
    console.log('Hello from Task1 Var2.')
}


// решение по заданию 1

function getDigitsOfNumber() {

    digits = +prompt('Введите значение целым числом в диапазоне [0 .. 999].', 245)
    if (digits !== digits || digits < 0 || digits > 999) {
        console.log('Укажите число с требуемым значением от 0 до 999.')
        return
    }

    let obj = new Object()
    obj.units = digits % 10
    obj.decades = Math.floor(digits / 10) % 10
    obj.hundreds = Math.floor(digits / 100)

    uObj = new Object()
    uObj['‘единицы’'] = obj.units
    uObj['‘десятки’'] = obj.decades
    uObj['‘сотни’'] = obj.hundreds

    return uObj
}


// решение по заданию 1 с применением синтаксиса spread syntax

let digits = 245
let objDigits = {
    '‘единицы’': (digits % 10),
    '‘десятки’': (Math.floor(digits / 10) % 10),
    '‘сотни’': (Math.floor(digits / 100))
}
let getNumbers = { ...objDigits
}





// решение по заданию 2

function task2() {

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
    index = (a - 1)

    let b = 'Вы выбрали товар: ' + PRODUCT_NAMES[index] + ' стоимостью ' + PRICES[index] + ' единиц'
    console.log(b)
    console.log('from Task2.')
}
