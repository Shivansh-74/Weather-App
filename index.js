function fun() {
    // temperature
    let temp = document.getElementById("temp");
    let wind = document.getElementById("wind");
    let t = document.getElementById("text");
    let val = t.value;

    console.log(val);
    // let b = Ny;
    let url = fetch(`https://goweather.herokuapp.com/weather/${val}`)
    url.then(r => r.json()).then((data) => {
        console.log(data);
        temp.innerHTML += `<h1>Temperature  is  ${data.temperature}</h1><br> + "\n"`;
        wind.innerHTML += `<h1>Wind  is  ${data.wind}</h1><br/> + "\n"`;
        // temp.innerHTML = ${data.temperature} \n ${country} \n Wind is ${data.wind};
    })
}