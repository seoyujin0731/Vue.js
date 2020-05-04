let a = [];

function sum (...a) {
    let result = 0;
    for(let i = 0; i < a.length; ++i)
       result += a[i];
    return result;   
}


function test_sum (f){

    for(let i = 0; i < 5; i++){
        a[i] = Math.floor(Math.random() * (10 - 0 + 1) );
    }
    console.log(a);

    
}





///보류 이따풀기