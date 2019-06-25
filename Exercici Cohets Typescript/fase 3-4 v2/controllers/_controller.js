"use strict";
var create_cohete = document.querySelector("#cohete");
var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
window.addEventListener('load', function () {
    create_cohete.addEventListener("click", selectCohete, false);
    print_cohete.addEventListener("click", printCohete, false);
    print_all_cohete.addEventListener("click", printAllCohetes, false);
});
var cohete;
var cohete_vel_actual;
var cohete_vel_maxima;
var cohetes_libreria = new Map();
var cohetes_object = {};
var count = 0;
var nombre;
var data = {
    cohete1: { codigo: "32WESSDS", propulsores: 3, potencia: [10, 30, 80] },
    cohete2: { codigo: "LDSFJA32", propulsores: 6, potencia: [30, 40, 50, 50, 30, 10] }
};
function selectCohete() {
    var size_data = Object.keys(data).length;
    var values_cohete = Object.values(data)[count];
    if (count < size_data) {
        var codigo = values_cohete.codigo;
        var propulsores = values_cohete.propulsores;
        var potencia = values_cohete.potencia;
        cohete = new Cohete(codigo, propulsores, potencia);
        console.log(cohete);
        cohetes_object.key = "cohete" + count;
        console.log(cohetes_object);
        cohetes_object.value = { "codigo": cohete.codigo, "propulsores": cohete.propulsores, "potencia": cohete.potencia };
    }
    console.log("obj: " + cohetes_object);
    count += 1;
}
;
function printCohete() {
    cohete_vel_actual = 0;
    cohete_vel_maxima = cohete.potencia.reduce(reducer);
    document.querySelector("#coh").innerHTML = "" + cohete.print(cohete.codigo, cohete.propulsores, cohete.potencia);
    document.querySelector("#velocidad_max").innerHTML = "" + cohete_vel_maxima;
    document.querySelector("#velocidad_id").innerHTML = "" + cohete_vel_actual;
}
;
var acccohete = document.querySelector("#ac_cohete");
acccohete.addEventListener("click", accCohete, false);
function accCohete() {
    if (cohete_vel_actual < cohete_vel_maxima) {
        cohete_vel_actual += 10;
    }
    document.querySelector("#velocidad_id").innerHTML = "" + cohete_vel_actual;
}
;
function decCohete() {
    if (cohete_vel_actual > 0) {
        cohete_vel_actual -= 10;
    }
    document.querySelector("#velocidad_id").innerHTML = "" + cohete_vel_actual;
}
;
