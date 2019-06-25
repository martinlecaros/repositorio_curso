"use strict";
var cohete = [];
var arrayPropulsores = [];
cohete[0] = new Cohete("32WESSDS");
cohete[0].agregarPropulsor("P1_" + cohete[0].codigo, 10);
cohete[0].agregarPropulsor("P2_" + cohete[0].codigo, 30);
cohete[0].agregarPropulsor("P3_" + cohete[0].codigo, 80);
cohete[1] = new Cohete("LDSFJA32");
cohete[1].agregarPropulsor("P1_" + cohete[1].codigo, 30);
cohete[1].agregarPropulsor("P2_" + cohete[1].codigo, 40);
cohete[1].agregarPropulsor("P3_" + cohete[1].codigo, 50);
cohete[1].agregarPropulsor("P4_" + cohete[1].codigo, 50);
cohete[1].agregarPropulsor("P5_" + cohete[1].codigo, 30);
cohete[1].agregarPropulsor("P6_" + cohete[1].codigo, 10);
window.addEventListener('load', function () {
    cargarCohetes();
    nuevoPropulsorModal();
    cargarListaPropulsores();
});
function cargarCohetes() {
    var contenedorCohetes = document.querySelector("#contenedor_cohetes");
    var coheteUnidad = document.createElement("ul");
    coheteUnidad.id = "lista_cohete";
    coheteUnidad.className = "list-group";
    coheteUnidad.innerHTML = cargarCoheteUnidad();
    if (contenedorCohetes.hasChildNodes()) {
        var ulCohete = document.getElementById("lista_cohete");
        contenedorCohetes.replaceChild(coheteUnidad, ulCohete);
    }
    else {
        contenedorCohetes.appendChild(coheteUnidad);
    }
}
function cargarCoheteUnidad() {
    var listaCohete = "";
    cohete.forEach(function (element) {
        listaCohete +=
            "<li class=\"list-group-item bg-light text-dark mb-2 p-4\">\n            <p>El cohete " + element.codigo + " tiene " + element.numeropropulsores + " propulsores:</p>\n            " + listaPropulsores(element) + " <span class=\"bpropulsores text-dark rounded p-2\">Velocidad actual: " + element.velocidadActual() + "</span>\n            <div class=\"mt-4\">\n            <button type=\"button\" class=\"btn btn-success mr-2\" id=\"ac_cohete" + element.codigo + "\" data-codigo=\"" + element.codigo + "\" onclick=\"acelerarCohete(this)\">Acelerar</button>\n            <button type=\"button\" class=\"btn btn-danger\" id=\"de_cohete" + element.codigo + "\" data-codigo=\"" + element.codigo + "\" onclick=\"frenarCohete(this)\">Frenar</button></li></div>";
    });
    return listaCohete;
}
function listaPropulsores(cohete) {
    var listaPropulsores = "";
    cohete.propulsores.forEach(function (element) {
        listaPropulsores += "<p class=\"d-inline mr-3\"><span class=\"bpropulsores  text-dark rounded p-2\">" + element.velocidadActual + "-" + element.velocidadMaxima + "</span></p>";
    });
    return listaPropulsores;
}
function acelerarCohete(evt) {
    var optionSelected = evt.dataset.codigo;
    var valorAcelerar = 10;
    cohete.forEach(function (element) {
        if (element.codigo == optionSelected) {
            element.acelerarCohete(valorAcelerar);
            cargarCohetes();
        }
    });
}
function frenarCohete(evt) {
    var optionSelected = evt.dataset.codigo;
    var valorFrenar = 10;
    cohete.forEach(function (element) {
        if (element.codigo == optionSelected) {
            element.frenarCohete(valorFrenar);
            cargarCohetes();
        }
    });
}
function pintarPropulsorModal(id_Propulsor, changeContent) {
    var propulsor = "<H6 class=\"mt-3\">Propulsor " + id_Propulsor + "</H6>\n    <div class=\"btn-group btn-group-toggle from_drive\" data-toggle=\"buttons\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Potencia M\u00E1xima</span>\n    </div>";
    var boton_cerrar = "<button type=\"button\" class=\"close ml-3\" aria-label=\"Close\" onclick=\"borrarPropulsorModal(" + id_Propulsor + ")\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>";
    return propulsor + generarInputsPropulsor(id_Propulsor, changeContent) + boton_cerrar;
}
function generarInputsPropulsor(id_Propulsor, changeContent) {
    var inputsForm = "";
    for (var i = 0; i <= 100; i += 10) {
        if (changeContent === true && arrayPropulsores[id_Propulsor].potenciaSeleccionada == i) {
            inputsForm += "\n            <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"propulsor" + id_Propulsor + "\" value=\"" + i + "\" autocomplete=\"off\" checked>" + i + "\n            </label>\n            ";
        }
        else if (changeContent === false && i == 0) {
            inputsForm += "\n            <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"propulsor" + id_Propulsor + "\" value=\"" + i + "\" autocomplete=\"off\" checked>" + i + "\n            </label>\n            ";
        }
        else {
            inputsForm += "\n            <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"propulsor" + id_Propulsor + "\" value=\"" + i + "\" autocomplete=\"off\">" + i + "\n            </label>\n            ";
        }
    }
    return inputsForm;
}
function agregarPropulsor() {
    nuevoCoheteModal();
    $('#cohete_nuevo').modal('hide');
    arrayPropulsores = [];
    nuevoPropulsorModal();
    cargarListaPropulsores();
    cargarCohetes();
}
function nuevoCoheteModal() {
    var nuevoIdCohete = document.querySelector("#id_cohete").value;
    cohete.push(new Cohete(nuevoIdCohete));
    for (var i = 0; i < arrayPropulsores.length; i++) {
        var maximaVelocidad = document.querySelector("input[name=\"propulsor" + i + "\"]:checked").value;
        cohete[cohete.length - 1].agregarPropulsor("P" + i + "_" + cohete[cohete.length - 1].codigo, "" + maximaVelocidad);
    }
}
function nuevoPropulsorModal() {
    if (arrayPropulsores.length <= 2) {
        arrayPropulsores.push(new AddPropulsores(arrayPropulsores.length, pintarPropulsorModal(arrayPropulsores.length, false)));
        cargarListaPropulsores();
    }
    else {
        document.querySelector("#msg_propulsores").innerHTML = "No puedes agregar más de 3 propulsores.";
    }
}
function borrarPropulsorModal(id_propulsor) {
    for (var i = 0; i < arrayPropulsores.length; i++) {
        var potenciaSeleccionada = document.querySelector("input[name=propulsor" + i + "]:checked").value;
        arrayPropulsores[i].potenciaSeleccionada = potenciaSeleccionada;
    }
    arrayPropulsores.splice(id_propulsor, 1);
    for (var i = 0; i < arrayPropulsores.length; i++) {
        arrayPropulsores[i].id_propulsor = i;
        arrayPropulsores[i].contenido = pintarPropulsorModal(i, true);
    }
    cargarListaPropulsores();
}
function cargarListaPropulsores() {
    var propulsores_modal = document.getElementById("lista_propulsores_modal");
    while (propulsores_modal.firstChild) {
        propulsores_modal.removeChild(propulsores_modal.firstChild);
    }
    for (var i = 0; i < arrayPropulsores.length; i++) {
        var li_listaprop = document.createElement("li");
        li_listaprop.id = "propulsor_modal_" + arrayPropulsores[i].id_propulsor;
        li_listaprop.innerHTML = arrayPropulsores[i].contenido;
        propulsores_modal.appendChild(li_listaprop);
    }
}
