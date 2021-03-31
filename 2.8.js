function power(val, pow, res = val) {
  if (pow == 1) {
    return res}
  else {
    res *= val
    pow -= 1
    return (power(val, pow, res))
  }
}

var g = power(2,4);
alert( g );
