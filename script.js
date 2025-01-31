
const squares = document.querySelectorAll('#container div');
var arr;

function getTime(){
    const now = new Date();
    const txt = now.toLocaleTimeString();
    arr = txt.split(':');
    
    squares[0].innerHTML = arr[0];
    squares[1].innerHTML = arr[1];
    squares[2].innerHTML = arr[2];

    if(arr[0] >= 20 && arr[0] < 4){
        document.body.className = 'night';
        squares[2].className = 'sec_night';
        squares[3].className = 'switch_night';
        squares[3].innerHTML = `PM`;
    }
    else{
        document.body.className = 'day';
        squares[3].innerHTML = `AM`;
    }

}

setInterval(getTime, 1000);