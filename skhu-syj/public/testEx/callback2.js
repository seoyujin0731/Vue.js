
let obj = {
    count: 0,
    startTimer: function() {
        console.log(this.count);
        
        //화살표 함수로 구현된 콜백 함수가 setInterval 내부에서 반복 호출될 때 this문제 발생하지 않는다
        let callback = () => { console.log(this.count++); };
        setInterval(callback, 1000)
    }
}

obj.startTimer();