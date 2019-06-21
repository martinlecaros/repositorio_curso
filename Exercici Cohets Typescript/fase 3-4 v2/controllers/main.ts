let cohete = [];
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

window.addEventListener('load', () => {
    cargarCohetes();
    agregarCoheteAlSelector(); 
    nuevoPropulsorModal();
    cargarListaPropulsores();
    document.querySelector("#ac_cohete").addEventListener("click", acelerarCohete, false);
    document.querySelector("#de_cohete").addEventListener("click", frenarCohete, false);
});

////Cargar cohete contenedor.
function cargarCohetes() {
    let contenedorCohetes = document.querySelector("#contenedor_cohetes");
    let coheteUnidad = document.createElement("ul");
    coheteUnidad.id = "rocket_list";
    coheteUnidad.className = "list-group";
    coheteUnidad.innerHTML = cargarCoheteUnidad();

    if (contenedorCohetes.hasChildNodes()) {
        let ulCohete = document.getElementById("rocket_list");
        contenedorCohetes.replaceChild(coheteUnidad,ulCohete);

    } else {
        contenedorCohetes.appendChild(coheteUnidad);
    }
}

////Cargar cohete unid.
function cargarCoheteUnidad() {
    let listaCohete: string = "";

    for (let i = 0; i < cohete.length; i++) {
        listaCohete +=
            `<li class="list-group-item">
            <p>El cohete ${cohete[i].codigo} tiene ${cohete[i].numeropropulsores} propulsores:</p>
                ${listaPropulsores(cohete[i])}
                <span class="velocidad_id">
                Velocidad actual: ${cohete[i].velocidadActual()}
                </span></li>`;
    }
    return listaCohete;
}
//<span class="badge badge-pill badge-primary">

function listaPropulsores(cohete) {
    let listaPropulsores: string = "";
    for (let i = 0; i < cohete.propulsores.length; i++) {
        listaPropulsores += `
        <p class="text">Velocidad actual: ${cohete.propulsores[i].velocidadActual} - Velocidad máxima: ${cohete.propulsores[i].velocidadMaxima}</p>
        `;
    }
    return listaPropulsores;
}
//<p class="badge badge-pill badge-dark">

function agregarCoheteAlSelector() {
    let selectorCohete = document.querySelector("#selectorCohete");
    
    // while (selectorCohete.firstChild) {
    //     selectorCohete.removeChild(selectorCohete.firstChild);
    // }

    for (let i = 0; i < cohete.length; i++) {
            let selectorOption = document.createElement("option");
            selectorOption.value = cohete[i].codigo;
            selectorOption.innerHTML = cohete[i].codigo;
            selectorCohete.appendChild(selectorOption);
    }
}


//Acelerar, frenar cohete
function acelerarCohete() {
    let valorAcelerar: number = 10;
    let optionSelected = document.getElementById("selectorCohete").value;
    
    for (var i = 0; i < cohete.length; i++) {
        if (cohete[i].codigo == optionSelected) {
            cohete[i].acelerarCohete(valorAcelerar);
            cargarCohetes();
        }
    }
}

function frenarCohete() {
    let valorFrenar: number = 10;
    let optionSelected = document.getElementById("selectorCohete").value;
    for (var i = 0; i < cohete.length; i++) {
        if (cohete[i].codigo == optionSelected) {
            cohete[i].frenarCohete(valorFrenar);
            cargarCohetes();
        }
    }
}

function generateInputsDriveForm(numberForm: number, changeContent: boolean) {
    let inputsForm = "";

    for (var i = 10; i <= 100; i += 10) {
        if (changeContent === true && arrayFormsDrive[numberForm].powerSelected == i) {
            inputsForm += `
            <label class="btn btn-outline-primary active">
            <input type="radio" name="potencia${numberForm}" value="${i}" autocomplete="off" checked>${i}
            </label>
            `;
        } else if (changeContent === false && i == 10) {
            inputsForm += `
            <label class="btn btn-outline-primary active">
            <input type="radio" name="potencia${numberForm}" value="${i}" autocomplete="off" checked>${i}
            </label>
            `;
        } else {
            inputsForm += `
            <label class="btn btn-outline-primary">
            <input type="radio" name="potencia${numberForm}" value="${i}" autocomplete="off">${i}
            </label>
            `;
        }
    }

    return inputsForm;
}


function generateContentFormDrive(numberForm: number, changeContent: boolean) {
    let headerForm = `
    <H6>Propulsor ${numberForm}</H6>
    <div class="btn-group btn-group-toggle from_drive" data-toggle="buttons">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Potència Màxima</span>
    </div>`;

    let footerForm = `
    </div>
    <a id="delete_drive" onclick="deleteFormDrive(${numberForm})"><i class="fas fa-times-circle"></i></a>
    </div>
    `;

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


function addRocket(){
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

let arrayPropulsores = [];

function nuevoCohete() {
    let nuevoIdCohete = document.getElementById("id_rocket").value;
    cohete.push(new Cohete(nuevoIdCohete));

    for (let i = 0; i < arrayPropulsores.length; i++) {
        let maxPowerDrive = document.querySelector(`input[name="potencia${i}"]:checked`).value;
        cohete[cohete.length - 1].addDrive("P" + i + "_" + cohete[cohete.length - 1].id, maxPowerDrive);
    }
}

function nuevoPropulsorModal() {
    arrayPropulsores.push(new AddPropulsores(arrayPropulsores.length, generateContentFormDrive(arrayPropulsores.length, false)));
    cargarListaPropulsores();
}

function borrarPropulsorModal(idForm: number) {
    for (var i = 0; i < arrayPropulsores.length; i++) {
        let powerSelected = document.querySelector("input[name=potencia" + i + "]:checked").value;
        arrayPropulsores[i].powerSelected = powerSelected;
    }

    arrayPropulsores.splice(idForm, 1);

    for (var i = 0; i < arrayPropulsores.length; i++) {
        arrayPropulsores[i].num = i;
        arrayPropulsores[i].content = generateContentFormDrive(i, true);
    }
    cargarListaPropulsores();
}



