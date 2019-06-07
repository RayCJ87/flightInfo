function getMap() {
    let theFlight = $(this).closest('.infoContainer').children('.flightode').text();
    let theLat = $(this).closest('.infoContainer').children('.latCode').text();
    let theLong = $(this).closest('.infoContainer').children('.longCode').text();
    window.open(`https://www.google.com/maps/embed/v1/place?key=AIzaSyDbiqvTyWa2FXPnu9EetqBHqHAyZRlv_j0&q=${theLat},${theLong}&zoom=5`, `${theFlight}`, 'height=400, width=400')

}

function getPic() {
    console.log("checking pics....");
}




$(document).ready(function(){
    $('.btn-primary').on('click', getMap);

})

