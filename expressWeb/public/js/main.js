const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const temp_real_value = document.getElementById('temp_real_value');

const datahide = document.querySelector('.middle_layer');
// console.log('vishal it is working')


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = 'Please write the Valid name before serach';
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f1f8a10b9fbf89f33cfa862475cf53f8`
            const response = await fetch(url);

            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.feels_like;
            console.log(arrData[0].main.temp)
            datahide.classList.remove('data_hide');

            const tempMood = arrData[0].weather[0].main;
            // Codition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            // datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = 'Please Enter the City Name Properly';
            datahide.classList.add('data_hide');
        }
    }


}

var todayDay = new Array(7)
var todayMonth = new Array(12)
todayDay[0] = 'Sunday';
todayDay[1] = 'Monday';
todayDay[2] = 'Tuesday';
todayDay[3] = 'Wednesday';
todayDay[4] = 'Thursday';
todayDay[5] = 'Friday';
todayDay[6] = 'Saturday';
todayMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];


let day = document.querySelector('#day');
let date = document.querySelector('#today_date')
    currentDate = new Date();
    day.innerText = todayDay[currentDate.getDay()];
    date.innerText = (currentDate.getDate())+' '+(todayMonth[currentDate.getMonth()])+' '+(currentDate.getFullYear())

submitBtn.addEventListener('click', getInfo);
submitBtn.addEventListener('click', getInfo);