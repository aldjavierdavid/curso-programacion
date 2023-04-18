// Tenemos que comprobar si el número 'n'; es divisible entre 'x' y entre 'y'
// Sé que un número es divisble por otro si resto de cero.
// Ejemplo: 3 % 1 da 0, entonces es divisible

// Por ejemplo, para la primera invocación n=3 , x=1, y=3
// En este caso, la función debería retornar true, porque 3 es divisible por 1 y por 3

function isDivisible(n, x, y) {
    // comprobar si el n % x es igual 0 y si n % y es igual a 0
    
    return n % x == 0 && n % y == 0;
  }
  
  console.log(isDivisible(3, 1, 3)); // true
  console.log(isDivisible(100, 5, 3)); // false
  