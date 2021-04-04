let a = 1
while (a < 100) {
    a += 1
    if (IsSimple(a) == false) {
        continue
    }
    alert(a)
}

function IsSimple(a) {
    let b = a - 1
    while (b > 1) {
        if (a % b == 0) {
            return false
        }
        b -= 1
    }
    return true
}
