
let a = [];

for(let i = 0; i < 100; i++){
    a[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}

let a2 = a.filter((e) => e % 2 === 0);

function callback(a, b) {
    return a + b;
}

let sum = a2.reduce(callback);
console.log(sum);