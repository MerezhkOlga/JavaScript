const cart = {
    containerElement: null,
    init() {
        this.containerElement = document.getElementById('cart')
        this.printCart()
    },
    goods: {
        'Хлеб': { count: 3, price: 30 },
        'Йогурт': { count: 4, price: 25 },
        'Яблоки': { count: 1.5, price: 50 }
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

cart.init()