var ms =0 , s=0, m=0 , h=0;
var timer;
var displayItem = document.querySelector('.display')

function run (){
    displayItem.textContent = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;
    if(ms == 100){
        ms=0;
        s++;
    }
    if(s==60){
        s=0;
        m++;
    }
    if(m==60){
        m=0;
        h++;
    }

}
function start(){
    if(!timer){
        timer = setInterval(run ,10)
    }
    
}
function stop(){
     clearInterval(timer)
     timer =false
}
function reset(){
    clearInterval(timer)
    timer =false
    ms =0;
    s=0;
    m=0; 
    h=0;
    displayItem.textContent = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}
function restart(){
     reset();
     start();
}