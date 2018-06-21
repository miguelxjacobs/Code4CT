// function googleMap() {
//     //creates an objection with specified properties
//     let mapSettings = {
//         //center - location map will display
//         center: new google.maps.LatLng(51.508742,-0.120850),
//         //zoom - perspective height from which map displays by default
//         zoom: 15,
//         //mapTypeId - map view by default
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
function myMap() {
    var myCenter = new google.maps.LatLng(51.508742,-0.120850);
    var mapCanvas = document.getElementsByClassName("map")[0];
    var mapOptions = {center: myCenter, zoom: 5};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
  
    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker,'click',function() {
      map.setZoom(9);
      map.setCenter(marker.getPosition());
    });
  }
    //allows map to be created within the div with the id of "map"
//     let map = new google.maps.Map(document.getElementById("map"), mapSettings);
// }