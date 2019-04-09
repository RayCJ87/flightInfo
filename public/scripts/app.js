function getMap() {
 let theLat = $('#showButton').closest('.infoContainer').children('.theLat').text();
 console.log("The lat: ", theLat);
 console.log("This ggg", $('.theLat').text());
    
}

$(document).ready(function(){
    $('#showButton').on('click', getMap);

})