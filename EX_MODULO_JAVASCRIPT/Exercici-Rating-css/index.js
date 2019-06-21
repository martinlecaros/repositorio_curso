const RATING1 = document.querySelector("#rating1");
const RATING2 = document.querySelector("#rating2");
const RATING3 = document.querySelector("#rating3");
const RATING4 = document.querySelector("#rating4");
const RATING5 = document.querySelector("#rating5");

var valuesRating = [1, 2, 3, 4, 5];

RATING1.addEventListener("click", sendValue, false);
RATING2.addEventListener("click", sendValue, false);
RATING3.addEventListener("click", sendValue, false);
RATING4.addEventListener("click", sendValue, false);
RATING5.addEventListener("click", sendValue, false);

$

function sendValue() {
  $.ajax({
    type: 'POST',
    url: 'rating.json',
    data: '{"name":"jonas"}', // or JSON.stringify ({name: 'jonas'}),
    success: function(data) { alert('data: ' + data); },
    contentType: "application/json",
    dataType: 'json'
  });
}

// for(i=0 ; i<valuesRating.length ; i++) {
//   console.log("RATING"+i);
//   RATING+i.addEventListener("click", function(){console.log(i);}, false);

// }