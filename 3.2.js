let basket = [{ count: 2, name: 'Хлеб', price: 30 }, { count: 4, name: 'Йогурт', price: 25 }, { count: 1.5, name: 'Яблоки', price: 50 }]

function countBasketPrice(mass) {
    let sum = 0
    // for (let i = 0; i < mass.lenght; i++) {
    //     sum += mass[i].count * mass[i].price
    // } Хотела воспользоваться фукцией for для перебора, но .lenght дает undefined как я поняла 
    // потому что последний элемент массива не определен. так что сделаю по-другому
    let i = 0
    do {
        sum += mass[i].count * mass[i].price
        i++
    } while (mass[i] != undefined)
    return sum
}

alert(countBasketPrice(basket))