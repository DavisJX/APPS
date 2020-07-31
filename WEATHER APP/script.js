var key1 = `fa44f435584778d25589d3d2b48cd3f9`;
var key2 = `hJwgHYdGnNHhu1Plnys8DMKhd0c3NUlZ0nZe462pJpc`; 
const form = document.querySelector('form');
var weather = document.querySelector('.weather');
var images= document.querySelector('.images');
var temperature = document.querySelector('.temperature');


form.addEventListener('click', e =>{
    e.preventDefault();

    var cityname = form.text.value.trim();

    if(cityname){
        const getWeather = async () => {
            const base = 'http://api.openweathermap.org/data/2.5/';
            const query =  `weather?q=${cityname}&appid=${key1}`;
        
            const response = await fetch(base + query);
            const data = await response.json(); 
        
            weather.innerHTML = data.weather[0].main;
            weather.style.padding =  ".5rem 1.5rem";

            const temp = data.main.temp;
            const celsius = parseInt(temp-273.15);
            
            temperature.innerHTML= `Temperature: ${celsius}°`;
            temperature.style.padding = `.5rem 1rem`
            
        };

        const getCityPicture = async () => {
            const base = `https://api.unsplash.com/search/photos`;
            const query = `?query=${cityname}&client_id=${key2}`;

            const response = await fetch(base + query);
            const data = await response.json();

            const img = data.results[1].urls.small;

            images.innerHTML = `<img src=${img}>`
        }
    
        getWeather();
        getCityPicture();
    }
 
});




