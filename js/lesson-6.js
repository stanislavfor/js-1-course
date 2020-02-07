"use strict"

// элементы каталога

let PRODUCTS_NAMES = ['Процессор', 'Монитор', 'Ноутбук', 'Мышь', 'Клавиатура', 'Наушники', 'Микрофон', 'Видеокамера']
let PRICES = [100, 120, 1000, 15, 18, 10, 20, 40]
let IDS = [0, 1, 2, 3, 4, 5, 6, 7]

let products = []

// function createProductsDTO (arr) {
//     arr = []
//     let length = IDS.length

//     for (let i = 0; i < length; i++) {
//         arr.push (createProduct (i))
//     }
// }

function createProduct(index) {
    return {
        product_name: PRODUCTS_NAMES[index],
        price: PRICES[index],
        id_product: IDS[index],
        img: 'https://placehold.it/200x150',
        createTemplate() {
            return `
                <div class='product-item' data-id="${this.id_product}">
                    <img src="${this.img}" alt="${this.product_name}">
                    <div class='desc'>
                        <h3>${this.product_name}</h3>
                        <p> ${this.price} $</p>
                        <button class="buy-btn"
                            data-id="${this.id_product}"
                            data-name="${this.product_name}"
                            data-price="${this.price}">
                            Купить
                        </button>
                    </div>
                </div>
            `
        }
    }
}

let catalog = {
    items: [],
    container: '.products',
    cart: null,

    init() {
        this._fetchItems()
        this._render()
        let totalPrice = 0
        let totalItems = 0
        console.log(`Корзина пуста`);
        document.getElementById('cart_items').innerHTML = `
                <div class='product-item-cart'>                    
                    <div class='desc'>
                        <p>Куплено товаров:</p> 
                        <h3>0</h3>
                        <p>Корзина пуста</p> 
                                                
                    </div>
                </div>
          `
        document.querySelector('#cart_items').style.background = 'lightgrey'
        document.querySelector('#cart_items').style.width = '220px'
        document.querySelector('#cart_items').style.height = '170px'
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                let product = evt.target.dataset

                totalPrice += +product.price
                    ++totalItems
                console.log(`Куплен ${product.name}, по цене ${+product.price}$`);
                document.getElementById('cart').innerHTML = `Товар ${product.name} помещен в корзину, всегов корзине ${+totalItems} товаров`;

                document.getElementById('cart_items').innerHTML = `
                <div class='product-item-cart'>                    
                    <div class='desc'>
                        <p>Добавлен товар:</p> 
                        <h3>${product.name}</h3>
                        <p>общая стоимость корзины:</p> 
                        <p> ${totalPrice} $</p>                        
                    </div>
                </div>
                `

                document.querySelector('#cart_items').style.background = 'white'
            }
        })
    },
    _fetchItems() {
        let length = IDS.length
        for (let i = 0; i < length; i++) {
            this.items.push(createProduct(i))
        }
    },
    _render() {
        let container = document.querySelector(this.container)
        let domString = ''
        this.items.forEach(item => {
            domString += item.createTemplate()
        })
        container.innerHTML = domString
    }
}




// элементы стилей css

let newNav = document.getElementsByClassName('nav')
newNav[0].style.background = 'black'
newNav[0].style.width = '1400px'
newNav[0].style.height = '50px'
newNav[0].style.marginTop = '50px'
newNav[0].style.position = 'relative'

let newLogo = document.getElementsByClassName('logo')
newLogo[0].style.paddingTop = '13px'
newLogo[0].style.color = 'white'
newLogo[0].style.marginLeft = '50px'
newLogo[0].innerText = 'E-SHOP'

let newCartButton = document.getElementsByClassName('btn_cart')
newCartButton[0].type = 'submit'
newCartButton[0].value = 'Корзина'
newCartButton[0].style.background = 'black'
newCartButton[0].style.color = 'white'
newCartButton[0].style.border = '2px solis white'
newCartButton[0].style.width = '80px'
newCartButton[0].style.height = '30px'
newCartButton[0].style.borderRadius = '5px'
newCartButton[0].style.position = 'absolute'
newCartButton[0].style.right = '40px'
newCartButton[0].style.top = '10px'
newCartButton[0].onmouseover = function () {
    this.style.backgroundColor = 'white'
    this.style.color = 'black'
    this.style.border = '2px solid white'
}
newCartButton[0].onmouseout = function () {
    this.style.backgroundColor = 'black'
    this.style.color = 'green'
    this.style.border = '2px solid green'
}

let newWrapper = document.getElementsByTagName('section')
newWrapper[0].style.display = 'flex'
newWrapper[0].style.flexFlow = 'row wrap'
newWrapper[0].style.justifyContent = 'space-around'
newWrapper[0].style.width = '1000px'
newWrapper[0].style.margin = '100px'



catalog.init()

// Элемент управления корзиной

window.onload = function ()

{

    btn_cart.addEventListener("mouseover", function ()

        {

            cart_items.classList.remove("hidden");


        });

    btn_cart.addEventListener("mouseout", function ()

        {

            cart_items.classList.add("hidden");

        });

}


//document.querySelector(".desc").style.paddingLift = '25px'

//let newProduct = document.getElementsByClassName('product-item')
//newProduct.className = 'product-item'
//newProduct.style.width = '200px'
//newProduct.style.height = '300px'
//newProduct.style.border = '1px solid grey'
//newProduct.style.borderRadius = '5px'
//newProduct.style.marginRight = '20px'
//newProduct.style.marginBottom = '10px'

//let newTitle = document.getElementsByClassName('h3.desc')
//let newParagraph = document.getElementsByClassName('p.desc')
//let newButton = document.getElementsByClassName('buy-btn')
//newButton.type = 'submit'
//newButton.style.background = 'black'
//newButton.style.color = 'white'
//newButton.style.background = 'black'
//newButton.style.width = '80px'
//newButton.style.height = '30px'
//newButton.style.borderRadius = '5px'
//newButton.onmouseover = function () {
//    this.style.backgroundColor = 'white'
//    this.style.color = 'black'
//}
//newButton.onmouseout = function () {
//    this.style.backgroundColor = 'black'
//    this.style.color = 'white'
//}