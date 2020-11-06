//selector
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const day = document.getElementById('day');


//Event Listener

name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);


//functions
function showtime(){
let today=new Date();
let hour=today.getHours();
let min=today.getMinutes();
let sec=today.getSeconds();
let date=today.toDateString();

// AM PM Format
const amPm=hour >=12 ? 'PM' :'AM';
//12 Hrs format
hour =hour%12 || 12;
time.innerHTML=`${addZero(hour)}:${addZero(min)}:${addZero(sec)}${amPm}`; //tilt operater`` is used so that every thing can be used string number etc
setTimeout(showtime,1000); //setTimeout will call the function for every 1000ms times
day.innerHTML=`${date}`;
}

function addZero(n){
    return((parseInt(n,10))<10 ? '0':'') + n ;
}
function setGreeting()
{
    
    let today=new Date();
    //let today=new Date(2020,12,10,15,15,20);
    let hour=today.getHours();
    if(hour < 12)
    {
        document.body.style.backgroundImage='url("../image/sunrise.jpg")';
        greeting.innerHTML="Good Morning";
    }
    else if(hour < 18)
    {
        document.body.style.backgroundImage='url("../image/1167987.jpg")';
        greeting.innerHTML="Good Afternoon";
        document.body.style.color="lightskyblue";
    }
    else
    {
        document.body.style.backgroundImage='url("../image/Sunset.jpg")';
        greeting.innerHTML="Good Evening";
        document.body.style.color="#ff704d";
    }
}
function getName(){
    if(localStorage.getItem("myName")===null){
        name.innerHTML="Enter Your Name";
    }
    else{
      name.innerHTML=localStorage.getItem("myName");
    }
}
function setName(e){ //function call will be done by event
    if(e.type==="keypress")
    {
         if(e.keyCode===13){
            localStorage.setItem('myName',e.target.innerHTML);
            name.blur(); 
         }
    }
    else{
        localStorage.setItem('myName',e.target.innerHTML);
    }
}

//function call
showtime();
setGreeting();
getName();