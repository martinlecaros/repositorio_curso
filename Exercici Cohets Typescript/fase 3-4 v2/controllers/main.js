var cohete = [];
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
cohete[2] = new Cohete("ADSFJA32");
cohete[2].agregarPropulsor("P1_" + cohete[2].codigo, 50);
cohete[2].agregarPropulsor("P2_" + cohete[2].codigo, 60);
cohete[2].agregarPropulsor("P3_" + cohete[2].codigo, 30);
window.addEventListener('load', function () {
    cargarCohetes();
    agregarCoheteAlSelector();
    nuevoPropulsorModal();
    cargarListaPropulsores();
    document.querySelector("#ac_cohete").addEventListener("click", acelerarCohete, false);
    document.querySelector("#de_cohete").addEventListener("click", frenarCohete, false);
});
////Cargar cohete contenedor.
function cargarCohetes() {
    var contenedorCohetes = document.querySelector("#contenedor_cohetes");
    var coheteUnidad = document.createElement("ul");
    coheteUnidad.id = "rocket_list";
    coheteUnidad.className = "list-group";
    coheteUnidad.innerHTML = cargarCoheteUnidad();
    if (contenedorCohetes.hasChildNodes()) {
        var ulCohete = document.getElementById("rocket_list");
        contenedorCohetes.replaceChild(coheteUnidad, ulCohete);
    }
    else {
        contenedorCohetes.appendChild(coheteUnidad);
    }
}
////Cargar cohete unid.
function cargarCoheteUnidad() {
    var listaCohete = "";
    for (var i = 0; i < cohete.length; i++) {
        listaCohete +=
            "<li class=\"list-group-item\">\n            <p>El cohete " + cohete[i].codigo + " tiene " + cohete[i].numeropropulsores + " propulsores:</p>\n                " + listaPropulsores(cohete[i]) + "\n                <span class=\"velocidad_id\">\n                Velocidad actual: " + cohete[i].velocidadActual() + "\n                </span></li>";
    }
    return listaCohete;
}
//<span class="badge badge-pill badge-primary">
function listaPropulsores(cohete) {
    var listaPropulsores = "";
    for (var i = 0; i < cohete.propulsores.length; i++) {
        listaPropulsores += "\n        <p class=\"text\">Velocidad actual: " + cohete.propulsores[i].velocidadActual + " - Velocidad m\u00E1xima: " + cohete.propulsores[i].velocidadMaxima + "</p>\n        ";
    }
    return listaPropulsores;
}
//<p class="badge badge-pill badge-dark">
function agregarCoheteAlSelector() {
    var selectorCohete = document.querySelector("#selectorCohete");
    // while (selectorCohete.firstChild) {
    //     selectorCohete.removeChild(selectorCohete.firstChild);
    // }
    for (var i = 0; i < cohete.length; i++) {
        var selectorOption = document.createElement("option");
        selectorOption.value = cohete[i].codigo;
        selectorOption.innerHTML = cohete[i].codigo;
        selectorCohete.appendChild(selectorOption);
    }
}
//Acelerar, frenar cohete
function acelerarCohete() {
    var valorAcelerar = 10;
    var optionSelected = document.getElementById("selectorCohete").value;
    for (var i = 0; i < cohete.length; i++) {
        if (cohete[i].codigo == optionSelected) {
            cohete[i].acelerarCohete(valorAcelerar);
            cargarCohetes();
        }
    }
}
function frenarCohete() {
    var valorFrenar = 10;
    var optionSelected = document.getElementById("selectorCohete").value;
    for (var i = 0; i < cohete.length; i++) {
        if (cohete[i].codigo == optionSelected) {
            cohete[i].frenarCohete(valorFrenar);
            cargarCohetes();
        }
    }
}
function generateInputsDriveForm(numberForm, changeContent) {
    var inputsForm = "";
    for (var i = 10; i <= 100; i += 10) {
        if (changeContent === true && arrayFormsDrive[numberForm].powerSelected == i) {
            inputsForm += "\n            <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"potencia" + numberForm + "\" value=\"" + i + "\" autocomplete=\"off\" checked>" + i + "\n            </label>\n            ";
        }
        else if (changeContent === false && i == 10) {
            inputsForm += "\n            <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"potencia" + numberForm + "\" value=\"" + i + "\" autocomplete=\"off\" checked>" + i + "\n            </label>\n            ";
        }
        else {
            inputsForm += "\n            <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"potencia" + numberForm + "\" value=\"" + i + "\" autocomplete=\"off\">" + i + "\n            </label>\n            ";
        }
    }
    return inputsForm;
}
function generateContentFormDrive(numberForm, changeContent) {
    var headerForm = "\n    <H6>Propulsor " + numberForm + "</H6>\n    <div class=\"btn-group btn-group-toggle from_drive\" data-toggle=\"buttons\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Pot\u00E8ncia M\u00E0xima</span>\n    </div>";
    var footerForm = "\n    </div>\n    <a id=\"delete_drive\" onclick=\"deleteFormDrive(" + numberForm + ")\"><i class=\"fas fa-times-circle\"></i></a>\n    </div>\n    ";
    return headerForm + generateInputsDriveForm(numberForm, changeContent) + footerForm;
}
function cargarListaPropulsores() {
    var listFormsDrive = document.getElementById("lista_propulsores_modal");
    while (listFormsDrive.firstChild) {
        listFormsDrive.removeChild(listFormsDrive.firstChild);
    }
    for (var i = 0; i < arrayPropulsores.length; i++) {
        var nodeLi = document.createElement("li");
        nodeLi.id = "form_drive_" + arrayPropulsores[i].id_propulsor;
        nodeLi.className = "group_drive_cross";
        nodeLi.innerHTML = arrayPropulsores[i].contenido;
        listFormsDrive.appendChild(nodeLi);
    }
}
function addRocket() {
    cargarCohetes();
    arrayPropulsores = [];
    nuevoCohete();
    $('#cohete_nuevo').modal('hide');
    nuevoPropulsorModal();
    cargarListaPropulsores();
    agregarCoheteAlSelector();
}
/// Modal. Rockets Creation.
//////////////////
var arrayPropulsores = [];
function nuevoCohete() {
    var nuevoIdCohete = document.getElementById("id_rocket").value;
    cohete.push(new Cohete(nuevoIdCohete));
    for (var i = 0; i < arrayPropulsores.length; i++) {
        var maxPowerDrive = document.querySelector("input[name=\"potencia" + i + "\"]:checked").value;
        cohete[cohete.length - 1].addDrive("P" + i + "_" + cohete[cohete.length - 1].id, maxPowerDrive);
    }
}
function nuevoPropulsorModal() {
    arrayPropulsores.push(new AddPropulsores(arrayPropulsores.length, generateContentFormDrive(arrayPropulsores.length, false)));
    cargarListaPropulsores();
}
function borrarPropulsorModal(idForm) {
    for (var i = 0; i < arrayPropulsores.length; i++) {
        var powerSelected = document.querySelector("input[name=potencia" + i + "]:checked").value;
        arrayPropulsores[i].powerSelected = powerSelected;
    }
    arrayPropulsores.splice(idForm, 1);
    for (var i = 0; i < arrayPropulsores.length; i++) {
        arrayPropulsores[i].num = i;
        arrayPropulsores[i].content = generateContentFormDrive(i, true);
    }
    cargarListaPropulsores();
}
