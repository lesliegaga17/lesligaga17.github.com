function celciusToFahrenheit (celcius){
     fahrenheit = (celcius* 9/5 ) + 32;
    return fahrenheit
}
function fahrenheitToCelcius (fahrenheit){
    celcius = (fahrenheit -32) * 5/9;
    return celcius;

}
console.log(celciusToFahrenheit (40));
console.log(celciusToFahrenheit (104));