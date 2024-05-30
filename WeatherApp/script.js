const btn=document.querySelector("#searchbtn");
const inputbox=document.querySelector('.inputbox')
const weather_img=document.querySelector('.weatherimg');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const windspeed=document.getElementById('windspeed');
const img=document.querySelector('.weatherimg');
const body=document.getElementsByTagName('body');



body.addEventListener('onkeydown',()=>{
    console.log();
})



img.src="";
temperature.innerHTML=`0<sup>°C</sup>`;
description.innerHTML=``
humidity.innerHTML=`0%`
windspeed.innerHTML=`0Km/Hr`
async function updateWeather(city){
    const api_key=`5c8e513d7c88d2f7ef47ab1eaf9031db`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const weatherdata= await fetch(`${url}`);
const data= await weatherdata.json();
temperature.innerHTML=`${Math.round(data.main.temp-273.15)}<sup>°C</sup>`;
description.innerHTML=`${data.weather[0].description}`
humidity.innerHTML=`${data.main.humidity}%`
windspeed.innerHTML=`${data.wind.speed}Km/Hr`
const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
img.src=IMG_URL;
console.log(data);
}


btn.addEventListener('click',()=>{
    updateWeather(inputbox.value)
});
