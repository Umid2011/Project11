let i = 0;
function func1(){
    i++;
    document.getElementById("h11").innerHTML= `Прошло ${i} секунд!`
}
setInterval(func1,1000);