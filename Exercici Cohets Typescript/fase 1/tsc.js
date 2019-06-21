"use strict";
function createCohetes(codigo, propulsores) {
    var cohete = new Cohete(codigo, propulsores);
    var output = document.createElement("p");
    var textnode = document.createTextNode("Rocket: " + cohete.codigo + " has " + cohete.propulsores + " thrusters.");
    output.setAttribute("class", "rockets");
    output.appendChild(textnode);
    document.body.appendChild(output);
}
;
var Cohete = /** @class */ (function () {
    function Cohete(codigo, propulsores) {
        this.codigo = codigo;
        this.propulsores = propulsores;
    }
    return Cohete;
}());
