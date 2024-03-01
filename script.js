function convert(){
    let inputCelsius=document.getElementById('inputBox');
    let celsius=inputCelsius.value;
    console.log(celsius)

    let farenheit=(celsius * 9/5)+32;
    console.log(farenheit)

    let farenheitDisplay=document.getElementById('farenheit')
    farenheitDisplay.value=farenheit.toFixed(1) + "° F";
}