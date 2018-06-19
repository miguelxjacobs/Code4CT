function googleMap() {
    //creates an objection with specified properties
    let mapSettings = {
        //center - location map will display
        center: new google.maps.LatLng(0.0, -0.0),
        //zoom - perspective height from which map displays by default
        zoom: 5,
        //mapTypeId - map view by default
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //allows map to be created within the div with the id of "map"
    let map = new google.maps.Map(document.getElementById("map"), mapSettings);
}