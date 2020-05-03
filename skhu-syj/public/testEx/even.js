let a = [];

for(let i = 0; i < 100; i++)
    a[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);

   
for(let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0)
        a.splice(i--, 1); // 삭제되어서 배열 크기 줄어들으므로 i-- (안해주면 앞부분 탐색 안하고 지나치게됨)
}

console.log(a);