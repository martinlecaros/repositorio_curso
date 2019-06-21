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
  for(var j=value;j>=0;j--){
    corazonesArray[j].classList.add("corazonselected");
  }
}

function outsideIcono() {
  var value = this.getAttribute("data-rat");
  for(var j=value;j>=0;j--){
    corazonesArray[j].classList.remove("corazonselected");
  }
}

function pressIcono() {
    limpiarIcono();
    selected = this;
    limpiar = true;

    for (let i = 0; i < corazonesArray.length; i++) {
        corazonesArray[i].removeEventListener('mouseout', outsideIcono, false)
        corazonesArray[i].removeEventListener("mouseover", sobreIcono, false);
    }
    
    while (selected !== null) {
        selected.classList.add("corazonselected");
        selected = selected.previousElementSibling;      
    } 
}

function limpiarIcono() {
  if (!limpiar) {
    for (let i = 0; i < corazonesArray.length; i++) {
      corazonesArray[i].classList.remove("corazonselected");
      corazonesArray[i].addEventListener("mouseout", outsideIcono, false);
      corazonesArray[i].addEventListener("mouseover", sobreIcono, false);
    }
  }
  limpiar = false;
}
