//read temperature in celsius and display a suitable message according to temperature state below : 
//Temp < 0 then Freezing weather
//Temp 0-10 then Very Cold weather
//Temp 10-20 then Cold weather
//Temp 20-30 then Normal in Temp
//Temp 30-40 then Its Hot
//Temp >=40 then Its Very Hot

const temp = 30;
if(temp <= 0){
    console.log("Freezing Weather")
}
else if(temp >= 0 && temp <= 10 ){
    console.log("Very cold")
}
else if(temp >= 10 && temp <= 20){
    console.log("cold weather")
}
else if(temp >= 20 && temp <= 30){
    console.log("normal in temp")
}
else if(temp >= 30 && temp <= 40){
    console.log("hot")
}
else if(temp >= 40){
    console.log("very hot")
}
else{
    console.log("wrong value")
}