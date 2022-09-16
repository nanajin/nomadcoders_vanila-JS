function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat, long);
}
function onGeoError(){
    alert("Can't find your location.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);