

let a = [];

for(let i = 0; i < 100; i++){
    a[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}


function average(array) {
    return array.reduce((sum, current) => sum + current, 0) / array.length;
}

console.log(average(a).toFixed(1));