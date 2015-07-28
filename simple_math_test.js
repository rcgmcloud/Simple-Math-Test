function numberProperty(n){
  var arr = [];

  function isPrime(n) {
     if (n < 2) {return false;}
     if (n != parseInt(n)) {return false;}

     var prime = true;
     for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {prime = false;}
     }
     return prime;
  }
  if(isPrime(n)){arr[0] = true;} else {arr[0] = false;}
  if(n % 2){arr[1] = false;} else {arr[1] = true;}
  if(n % 10){arr[2] = false;} else {arr[2] = true;}

  return arr;
}