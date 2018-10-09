document.getElementById('fahrenheit').addEventListener('input', function (e) {
    if (String(e.target.value).length!=0){
        var celsius=(e.target.value-32)*5/9
        var kelvini=celsius + 273.15;
        var roundKelvin=kelvini.toFixed(4);
        var roundCelsius=celsius.toFixed(4)
        document.getElementById('kelvinToFahrenheit').textContent=roundKelvin;
        document.getElementById('celsiusToFahrenheit').textContent=roundCelsius;
        console.log(typeof  e.target.value);
    }else
    {
        document.getElementById('kelvinToFahrenheit').textContent='';
        document.getElementById('celsiusToFahrenheit').textContent='';

    }


})



document.getElementById('kalvin').addEventListener('input', function (e) {
    if (String(e.target.value).length!=0) {
        var fahrenheit = (e.target.value - 273.15) * 9 / 5 + 32;
        document.getElementById('fahrenheitToKalvin').textContent = fahrenheit.toFixed(4);
        document.getElementById('celsiusToKalvin').textContent = (e.target.value - 273.15).toFixed(4);
        fahrenheit.toFixed(4)
    }else
    {
        document.getElementById('fahrenheitToKalvin').textContent='';
        document.getElementById('celsiusToKalvin').textContent='';

    }
})





document.getElementById('celsius').addEventListener('input', function (e) {
    if (String(e.target.value).length!=0) {
        var fahrenteit = e.target.value * 9 / 5 + 32;
        document.getElementById('fahrenheittoCelsius').textContent = fahrenteit.toFixed(4);
        document.getElementById('kelvinToCelsious').innerHTML = (e.target.value - (-273.15)).toFixed(4);
    }else
    {
        document.getElementById('fahrenheittoCelsius').textContent='';
        document.getElementById('kelvinToCelsious').textContent='';


    }
})
