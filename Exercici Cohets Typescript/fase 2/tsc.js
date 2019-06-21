"use strict";
function createCohetes(codigo, propulsores, potenciamax) {
    var cohete = new Cohete(codigo, propulsores, potenciamax);
    var output = document.createElement("p");
    var textnode = document.createTextNode("Rocket: " + cohete.codigo + " has " + cohete.propulsores + " thrusters and its maximum power is: " + cohete.potenciamax);
    output.setAttribute("class", "rockets");
    output.appendChild(textnode);
    document.body.appendChild(output);
}
;
var Cohete = /** @class */ (function () {
    function Cohete(codigo, propulsores, potenciamax) {
        this.codigo = codigo;
        this.propulsores = propulsores;
        this.potenciamax = potenciamax;
    }
    ;
    return Cohete;
}());
