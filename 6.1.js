const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [],

    containerElement: null,

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    cleanCart() {
        this.goods = [];
        this.render();
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.cleanCart.bind(this));
    },

    render() {
        if (this.goods.length > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    renderCartItem(item) {
        return `<div>
                <h3>${item.name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    addToCart(product) {
        const findInBasket = this.goods.find(({ id }) => product.id === id);
        if (findInBasket) {
            findInBasket.quantity++;
        } else {
            this.goods.push({ ...product, quantity: 1 });

        }
        this.render();

    }
}


const catalog = {
    catalogBlok: null,
    cart: null,
    productlist: [
        { id: 1, name: 'Хлеб', price: 30 },
        { id: 2, name: 'Йогурт', price: 25 },
        { id: 3, name: 'Молоко', price: 50 }
    ],

    init(CatalogClass, cart) {
        this.catalogBlock = document.querySelector(`.${CatalogClass}`);
        this.cart = cart
        this.render();
        this.eventHendlers();
    },

    catalogItem(item) {
        return `<div class="product">
                <h3>${item.name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id="${item.id}">В корзину</button>
            </div>`;
    },

    render() {
        this.catalogBlock.innerHTML = '';
        this.productlist.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.catalogItem(item));
        });
    },

    addToCart(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const idProduct = +event.target.dataset.id;
        const productToAdd = this.productlist.find((product) => product.id === idProduct);
        this.cart.addToCart(productToAdd);
    },

    eventHendlers() {
        this.catalogBlock.addEventListener('click', event => this.addToCart(event));
    }
}


catalog.init('CatalogClass', cart);
cart.init('cart', 'clr-cart');