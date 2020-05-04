

let a = [];

for(let i = 0; i < 100; i++){
    a[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}

console.log(a);



function average(array) {
    var sum = 0.0;
  
    for (var i = 0; i < array.length; i++)
      sum += array[i];
  
    return sum / array.length;
  }


