var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById("clock");
    var currenTime = new  Date();
    var hours = currenTime.getHours();
    var minutes = currenTime.getMinutes();
    var seconds = currenTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM"
    }

    var clockTime = hours + ": " + minutes + ": "+seconds+ " " +meridian;
    
    changeImage();

    clock.innerText = clockTime


  
   

    
}


var oneSecond = 1000
setInterval(showCurrentTime,oneSecond )

function changeImage(){
    var time = new Date().getHours();

    var image = "img/ds.png";
    var imageHTML = document.getElementById("timeImage")

    if(time== wakeuptime){
        image = "img/mornig.gif";
    }else if(time= dstime){
        image = "img/img.gif"
    }else if(time == sleeptime){
        image = "img/night.gif";
    }

    imageHTML.src = image;
}