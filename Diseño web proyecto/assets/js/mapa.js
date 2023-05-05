
// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 13.68935, lng: -89.18718},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,

    });
}
