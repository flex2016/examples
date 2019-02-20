class AjaxWeather {
  constructor(){
    this.apiKey = 'dea12e840ab8d22864a9ef84526215f6';
  }
  async getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=imperial`;
    const weatherData = await fetch(url);
    const weather = await weatherData.json();
    return weather;
  };
};

class Display{
  constructor(){
    this.results = document.querySelector('.results');
    this.cityName = document.getElementById('cityName');
    this.cityCountry = document.getElementById('cityCountry');
    this.cityIcon = document.getElementById('cityIcon');
    this.cityTemp = document.getElementById('cityTemp');
    this.cityHumidity = document.getElementById('cityHumidity');
  }
  showWeather(data){
    const {name, sys:{country}, main:{temp, humidity}} = data;
    const {icon} = data.weather[0];

    this.results.classList.add('showItem');
    this.cityName.textContent = name;
    this.cityCountry.textContent = country;
    this.cityTemp.textContent = temp;
    this.cityHumidity.textContent = humidity;
    this.cityIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
  }
}

(function(){

  const form = document.getElementById('weatherForm');
  const cityInput = document.getElementById('cityInput');
  const feedback = document.querySelector('.feedback');

  //class
  const ajax = new AjaxWeather();
  const display = new Display();
  form.addEventListener('submit', event => {
    event.preventDefault();
    const city = cityInput.value;

    if(city.length === 0){
      showFeedback(' city value cannot be empty')
    }
    else{
      ajax.getWeather(city).then(data => {
        if(data.message === 'city not found'){
          showFeedback('city not found');
        }
        else{
          display.showWeather(data);
        }
      });
    }

  });


  function showFeedback(text){
    feedback.classList.add('showItem');
    feedback.innerHTML = `<p>${text}</p>`;
    setTimeout(() => {
      feedback.classList.remove('showItem');
    }, 3000)
  };
})();
