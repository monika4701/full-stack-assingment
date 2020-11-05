//selector
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const day = document.getElementById('day');

//functions
function showtime(){
let today=new Date();
let hour=today.getHours();
let min=today.getMinutes();
let sec=today.getSeconds();
let date=today.toDateString();


//AM PM Format
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

//function call
showtime();