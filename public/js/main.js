// https://api.openweathermap.org/data/2.5/weather?q=OKARA&appid=326fa8888f373c10736610bf25d4add8
let search = document.getElementById("Submit_btn");
let cityName = document.getElementById("Input_temp");
let cityOutput = document.getElementById("City_output");
let cityTemp = document.getElementById("city_temp");
let tempStatus = document.getElementById("tempStatus");
let date_time = document.getElementById("date_time");
let tempImg = document.querySelector(".TempImg");


const getInfo = async (event) => {
    let cityVal = cityName.value;
    let date = new Date();
    date_time.innerHTML = date;

    if (cityVal === "") {
        cityOutput.innerHTML = "Plz Enter The city Name ";
        tempStatus.innerHTML = "Tempature Status";
        cityTemp.innerHTML = "0";
    }
    else {
        try {
            let url = ` https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=326fa8888f373c10736610bf25d4add8`
            const Api = await fetch(url);
            const data = await Api.json();
            const arryData = [data]
            cityOutput.innerHTML = `${arryData[0].name},${arryData[0].sys.country}`
            cityTemp.innerHTML = arryData[0].main.temp;
            tempStatus.innerHTML = arryData[0].weather[0].main;
            const tempMood = arryData[0].weather[0].main;
            
            // if condition For temp status img
            if (tempMood === "Clear") {
                tempImg.style.backgroundImage="url(/img/sun.png)" 
            }
            else if (tempMood === "Smoke") {
                tempImg.style.backgroundImage="url(/img/clouds.png)"
                console.log("smoky");
            }
            else if (tempMood === "Clouds") {
                tempImg.style.backgroundImage="url(/img/cloudy-day.png)"
                console.log("Cloudy");
            }
            else if (tempMood === "Rain") {
                tempImg.style.backgroundImage="url(/img/rain.png)"
                console.log("Cloudy");
            }
            else if (tempMood === "Haze") {
                tempImg.style.backgroundImage="url(/img/Haze.png)"
                console.log("Cloudy");
            }
            else if (tempMood === "Snow") {
                tempImg.style.backgroundImage="url(/img/snowy.png)"
                console.log("Cloudy");
            }
        }

        catch {
            cityOutput.innerHTML = ` Opps!!! ${cityVal} City Doesnot Exist`;
            tempStatus.innerHTML = "Tempature Status";
            cityTemp.innerHTML = "0";
        }
    }
}
search.addEventListener('click', getInfo);