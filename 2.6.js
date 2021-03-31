function mathOperation(arg1, arg2, operation) {
  switch (operation) {
  case "Сложение":
    return arg1 + arg2;
    break;
  case "Вычетание":
    return arg1 - arg2;
    break;
  case "Умножение":
    return arg1 * arg2;
    break;
  case "Деление":
    return arg1 / arg2;
    break;
  default:
    return "Неизвестная операция!"; }
}

var res1 = mathOperation(4, 2, "Сложение");
alert( res1 );
var res2 = mathOperation(4, 2, "Вычетание");
alert( res2 );
var res3 = mathOperation(4, 2, "Умножение");
alert( res3 );
var res4 = mathOperation(4, 2, "Деление");
alert( res4 );