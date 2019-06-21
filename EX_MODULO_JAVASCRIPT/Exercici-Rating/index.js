
var selected = document.activeElement;
var nodeList = Array.prototype.slice.call( document.querySelectorAll(".corazon")); 
var txtarea = document.querySelectorAll(".corazon")[nodeList.indexOf(selected)];

console.log(txtarea);

var selectedIndex = parseInt(selected.getAttribute('data-rat'), 10);

var icono = document.querySelectorAll(".corazon");

  icono.forEach(function (icono, index) {

        if (index < selectedIndex) {
          event.target.classList.add("corazonselected");
        } else {
          event.target.classList.remove("corazonselected");
        }
      
      var remove = function() {
        event.target.classList.remove("corazonselected");
      };
        
      /// events
      icono.addEventListener("mouseover", function(event) {
        event.target.classList.add("corazonselected");
      }, false);

      icono.addEventListener("mouseout", remove, false); 

      icono.addEventListener("click", function(event) {
          event.target.removeEventListener("mouseout", remove, false); 
          event.target.classList.add("corazonselected");
      }, false);

  });









/*
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
  
    var corazon = document.querySelectorAll('.corazon');
    var corazonArray = Array.from(corazon);

    corazonArray.addEventListener('mouseover', function(event) {
      event.target.innerHTML = event.target.index;
      //var index = this.corazonArray[index];
      console.log(index);
    
    }, false);


  }
}

$(document).ready(function() {
  var halfStarArray = $('.rating button');
  $('.rating button').hover(function() {
      var index = $(this).index();
     //add class to all previous li elements using `lt` selector
     $('.rating button:lt(' + index + ')').addClass('.corazonselected');
     $(this).addClass('.corazonselected');
  }, function() {
    var index = $(this).index();
    //remove class from all previous li elements using `lt` selector
    $('.rating button:lt(' + index + ')').removeClass('.corazonselected');
    $(this).removeClass('.corazonselected');
  });
});
*/
/*
var corazon = Array.from(querySelectorAll('.corazon');
var corazon = document.querySelectorAll('.corazon');
const corazonArray = Array.from(corazon);
//Array.from(querySelectorAll('.corazon')).forEach((li)
///MOUSE OVER
corazonArray.addEventListener('mouseover', function() {

  // Loop through each star, and add or remove the `.selected` class 
//to toggle highlighting
// corazonArray.forEach(function (index) {});
  if (corazonArray[0]) {
    // Selected star or before it
    // Add highlighting
    corazon.classList.add('selected');
  } else {
    // After selected star
    // Remove highlight
    var elem = document.querySelector(".corazon.selected"); //select the element
    elem.remove(); //remove the element
  }

  
  RATING1.setAttribute('style', 'color: ' + '#ff2121'  + ';');

}, false);



*/


/*

const RATING1 = document.querySelector("#rating1");
const RATING2 = document.querySelector("#rating2");
const RATING3 = document.querySelector("#rating3");
const RATING4 = document.querySelector("#rating4");
const RATING5 = document.querySelector("#rating5");
const ALL = document.querySelectorAll("div.rating > button");



///MOUSE OVER
RATING1.addEventListener('mouseover', function() {
  RATING1.setAttribute('style', 'color: ' + '#ff2121'  + ';');
}, false);

RATING2.addEventListener('mouseover', function() {
  RATING1.setAttribute('style', 'color: ' + '#ff2121'  + ';');
  RATING2.setAttribute('style', 'color: ' + '#ff2121'  + ';');
}, false);

RATING3.addEventListener('mouseover', function() {
  RATING1.setAttribute('style', 'color: ' + '#ff2121'  + ';');
  RATING2.setAttribute('style', 'color: ' + '#ff2121'  + ';');
  RATING3.setAttribute('style', 'color: ' + '#ff2121'  + ';');
}, false);

RATING4.addEventListener('mouseover', function() {
  RATING1.setAttribute('style', 'color: ' + '#ff2121'  + ';');
  RATING2.setAttribute('style', 'color: ' + '#ff2121'  + ';');
  RATING3.setAttribute('style', 'color: ' + '#ff2121'  + ';');
  RATING4.setAttribute('style', 'color: ' + '#ff2121'  + ';');
}, false);

RATING5.addEventListener('mouseover', function() {
  ALL.setAttribute('style', 'color: ' + '#ff2121'  + ';');
}, false);


///CLICK
RATING1.addEventListener('click', function() {
  RATING1.setAttribute('style', 'color: ' + 'black'  + ';');
}, false);

// RATING1.addEventListener('mouseout', function() {
//   RATING1.setAttribute('style', 'color: ' + '#fca6e9'  + ';');
// }, false);



*/