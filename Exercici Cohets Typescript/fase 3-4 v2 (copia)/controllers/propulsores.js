/// Modal. Rockets Creation.
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
