var corazonesArray = document.getElementsByTagName("button");
var contenedor = document.getElementById("wrapper");
var limpiar = false;
contenedor.parentNode.addEventListener("click", limpiarIcono, false);

for(let i=0;i<corazonesArray.length;i++) {
  corazonesArray[i].addEventListener("mouseover", sobreIcono, false);
  corazonesArray[i].addEventListener("mouseout", outsideIcono, false);
  corazonesArray[i].addEventListener("click", pressIcono, false);
}

function sobreIcono() {
  var value = this.getAttribute("data-rat");
  for(var j=value-1;j>=0;j--){
    corazonesArray[j].classList.add("corazonselected");
  }
}

function outsideIcono() {
  var value = this.getAttribute("data-rat");
  for(var j=value-1;j>=0;j--){
    corazonesArray[j].classList.remove("corazonselected");
  }
}

function pressIcono() {

  (() => {
    for (let i = 0; i < corazonesArray.length; i++) {
    corazonesArray[i].classList.remove("corazonselected");
    corazonesArray[j].removeEventListener('mouseout', outsideIcono, false)
    }
  })()
  
    limpiar = true;
    var value = this.getAttribute("data-rat");
    console.log(value);

    do {
        this.classList.add("corazonselected");
        this = this.previousElementSibling;
    } while (this !== null);
}

function limpiarIcono() {
  if (!limpiar) {
    for (let i = 0; i < corazonesArray.length; i++) {
      corazonesArray[i].classList.remove("corazonselected");
    }
  }
  limpiar = false;
  value = 0;
  console.log(value);
}

