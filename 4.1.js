
function getNum() {
    let a = -1
    while (a < 0 || a > 999) {
        a = prompt('Введите чисо от 0 до 999')
    }
    return a
}

function NumToArr(num) {
    let arr = [Math.floor(num / 100), Math.floor((num - Math.floor(num / 100) * 100) / 10), num % 10]
    return arr
}

function Nums(hundreds, dozens, units) {
    this.hundreds = hundreds;
    this.dozens = dozens;
    this.units = units;
}

function numToObj() {
    num = getNum()
    arr = NumToArr(num)
    let ThisNum = new Nums(arr[0], arr[1], arr[2])
    return ThisNum
}

console.log(numToObj())