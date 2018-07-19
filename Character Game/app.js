var interval;

function rightShift() {   
    clearInterval(interval);    
    interval = setInterval(function(){
        var input = document.getElementById("left-box").value;
        document.getElementById("right-box").value += input.substring(0,1);
        document.getElementById("left-box").value = input.substring(1);
    }, 1000);    
}

function pause() {
    clearInterval(interval);
}

function leftShift() {  
    clearInterval(interval);     
    interval = setInterval(function(){
        var input = document.getElementById("right-box").value;
        document.getElementById("left-box").value = input.substring(input.length-1) + document.getElementById("left-box").value;
        document.getElementById("right-box").value = input.substring(0,input.length-1);
    }, 1000);    
}

document.getElementById("right-shift").addEventListener("click", rightShift);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("left-shift").addEventListener("click", leftShift);