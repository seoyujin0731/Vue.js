let timerCount = 1;

let id = setInterval(() => {

    if(timerCount == 10)
       clearInterval(id)
    console.log( new Date())
    timerCount++

}, 1000);
    

