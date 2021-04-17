const cart = {
    containerElement: null,
    init() {
        this.containerElement = document.getElementById('cart')
        this.printCart()
    },
    goods: {
        'Хлеб': { count: 3, price: 30 },
        'Йогурт': { count: 4, price: 25 },
        'Молоко': { count: 2, price: 50 }
    },
    cartsum() {
        let sum = 0
        let count = 0
        for (let key in this.goods) {
            sum += this.goods[key].count * this.goods[key].price
            count++
        }
        return { "count": count, "sum": sum }
    },

    printCart() {
        let result = this.cartsum()
        if (result["count"] == 0) {
            this.containerElement.textContent = 'Корзина пуста'
        } else {

            this.containerElement.textContent = "В корзине " + result["count"] + ' товара(ов)'
            this.containerElement.textContent += " на сумму: " + result["sum"] + ' рублей.'
        }
    }

}

const catalog = {
    catalogBlok: null,
    cart = null,
    productlist =[
        { 'id': 1, 'name': 'Хлеб', 'price': 30 },
        { 'id': 2, 'name': 'Йогурт', 'price': 25 },
        { 'id': 3, 'name': 'Молоко', 'price': 50 }
    ],

    init(CatalogClass, cart) {
        this.catalogBlok = document.getElementById(CatalogClass)
        this.cart = cart
        this.render()
        this.eventHendlers()
    },

    catalogItem(item) {
        return `<div class="item">
        <h3>${item.name}</h3>
        <h4>${item.price} p.</h4>
        <button class="addToCart" data-id="${item.id}">Добавить</button>
    </div>`
    },

    render() {
        this.catalogBlok.innerHTML = ' '
        this.productlist.forEach(item => {
            this.catalogBlok.innerAdjasentHTML(this.catalogItem(item))
        })
        // for (let i = 0; i < this.productlist.length; i++) {
        // this.catalogItem(productlist[i])
        // this.catalogBlok.innerHTML(this.catalogItem(this.productlist[i]))
    },

    addToCart(event) {
        const IdProduct = +event.target.dataset.id
        const AddProduct = this.productlist.find((product) => product.id === IdProduct)
        this.cart.addToCart(AddProduct)
    },

    eventHendlers() {
        this.catalogBlok.addEventListener('click', event => this.addToCart(event))
    }
}


catalog.init('CatalogClass', cart)
cart.init()