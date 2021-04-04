// В прошлом домашнем задании я уже забежала вперед и реализовала с помощью объектов, т.к.прочитала немного про них 
// на моем любимом https://learn.javascript.ru и подумала, что с ними будет удобнее. Теперь попробую полностью уйти 
// от массива в пользу объекта

let basket = {
    'Хлеб': { count: 3, price: 30 },
    'Йогурт': { count: 4, price: 25 },
    'Яблоки': { count: 1.5, price: 50 }
}

let sum = 0
for (let key in basket) {
    sum += basket[key].count * basket[key].price
}

console.log(sum)