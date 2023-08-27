let t = 60;
function stopWatch(){
    if (t > 0 && t == 60){
        console.log(t)
    }
    if (t > 0){
        t--
        console.log(t);
    }
}
setInterval(stopWatch, 1000);