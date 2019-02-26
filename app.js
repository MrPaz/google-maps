var map = null;

function initMap(){
    var center = {lat: 41.947315, lng: -87.654401}; //1000 W Addison = Wrigley Field
    var mapOptions = {
        center: center,
        zoom: 6
    }

    var mapDiv = document.querySelector(".map");
    map = new google.maps.Map(mapDiv, mapOptions);

    // The location of Wrigley Field
    var wrigley = {lat: 41.947315, lng: -87.654401};
    // The map, centered at Wrigley 
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 6, center: wrigley});
    // The marker, positioned at Wrigley
    var marker = new google.maps.Marker({position: wrigley, map: map});

    //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    window.navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess, getCurrentPositionError);
}

function getCurrentPositionSuccess(position){
    console.log(position);
    var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(center);
}

function getCurrentPositionError(){
    console.log("Error");
}