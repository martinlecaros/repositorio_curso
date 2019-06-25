let cohete = [];
let arrayPropulsores = [];

window.addEventListener('load', () => {
    cargarCohetes();
    nuevoPropulsorModal();
    cargarListaPropulsores();
});

////Cargar cohete contenedor.
function cargarCohetes() {
    let contenedorCohetes = document.querySelector("#contenedor_cohetes");
    let coheteUnidad = document.createElement("ul");
    coheteUnidad.id = "lista_cohete";
    coheteUnidad.className = "list-group";
    coheteUnidad.innerHTML = cargarCoheteUnidad();

    if (contenedorCohetes.hasChildNodes()) {
        let ulCohete = document.getElementById("lista_cohete");
        contenedorCohetes.replaceChild(coheteUnidad,ulCohete);

    } else {
        contenedorCohetes.appendChild(coheteUnidad);
    }
}

////Cargar cohete unid.
function cargarCoheteUnidad() {
    let listaCohete: string = "";

    cohete.forEach(element => {
        listaCohete +=
            `<li class="list-group-item bg-light text-dark mb-2 p-4">
            <p>El cohete ${element.codigo} tiene ${element.numeropropulsores} propulsores:</p>
            ${listaPropulsores(element)} <span class="bpropulsores text-dark rounded p-2">Velocidad actual: ${element.velocidadActual()}</span>
            <div class="mt-4">
            <button type="button" class="btn btn-success mr-2" id="ac_cohete${element.codigo}" data-codigo="${element.codigo}" onclick="acelerarCohete(this)">Acelerar</button>
            <button type="button" class="btn btn-danger" id="de_cohete${element.codigo}" data-codigo="${element.codigo}" onclick="frenarCohete(this)">Frenar</button></li></div>`; 
    });
    return listaCohete;
}

////Cargar Propulsores cohete unid.
function listaPropulsores(cohete) {
    let listaPropulsores: string = "";

    cohete.propulsores.forEach(element => {
        listaPropulsores += `<p class="d-inline mr-3"><span class="bpropulsores  text-dark rounded p-2">${element.velocidadActual}-${element.velocidadMaxima}</span></p>`;
    });
    return listaPropulsores;
}


//Acelerar, frenar cohete
function acelerarCohete(evt) {  
    let optionSelected = evt.dataset.codigo;
    let valorAcelerar: number = 10;
    
    cohete.forEach(element => {
        if (element.codigo == optionSelected) {
            element.acelerarCohete(valorAcelerar);
            cargarCohetes();
        }
    });
}

function frenarCohete(evt) {
    let optionSelected = evt.dataset.codigo;
    let valorFrenar: number = 10;

    cohete.forEach(element => {
        if (element.codigo == optionSelected) {
            element.frenarCohete(valorFrenar);
            cargarCohetes();
        }
    });
}

////PROPULSORES // 

function pintarPropulsorModal(id_Propulsor: number, changeContent: boolean) {
    let nombre = `<H6 class="mt-3 font-weight-bold">Propulsor ${id_Propulsor}</H6>
    <span class="mr-3">Potencia Máxima</span>`;

    let delete_btn = `<button type="button" class="btn btn-primary ml-3" aria-label="Close" onclick="borrarPropulsorModal(${id_Propulsor})">
        <span aria-hidden="true">&times;</span>
    </button>`;
    return nombre + propulsor(id_Propulsor, changeContent) + delete_btn;
}

function propulsor(id_Propulsor: number, changeContent: boolean) {
    let propulsor = "";

    for (let i = 0; i <= 100; i += 10) {
        if (changeContent === true && arrayPropulsores[id_Propulsor].potenciaSeleccionada == i) {
            propulsor += `<label class="radio-inline mx-2 text-center"><input type="radio" name="propulsor${id_Propulsor}" value="${i}" checked>${i}</label>`;
        } 
        else if (changeContent === false && i == 0) {
            propulsor += `<label class="radio-inline mx-2 text-center"><input type="radio" name="propulsor${id_Propulsor}" value="${i}" checked>${i}</label>`;
        } else {
            propulsor += `<label class="radio-inline mx-2 text-center"><input type="radio" name="propulsor${id_Propulsor}" value="${i}">${i}</label>`;
        }
    }
    return propulsor;
}


function agregarPropulsor(){
    nuevoCoheteModal();
    arrayPropulsores = [];
    nuevoPropulsorModal();
    cargarListaPropulsores(); 
    cargarCohetes();     
}

//// GUARDAR en array propulsor nuevo cohete
function nuevoCoheteModal() {
    let nuevoIdCohete = document.querySelector("#id_cohete").value;
    
    if(nuevoIdCohete.length === 8) {
        cohete.push(new Cohete(nuevoIdCohete));

        for (let i = 0; i < arrayPropulsores.length; i++) {
            let maximaVelocidad = document.querySelector(`input[name="propulsor${i}"]:checked`).value;
            cohete[cohete.length - 1].agregarPropulsor(`P${i}_${cohete[cohete.length - 1].codigo}`, `${maximaVelocidad}`);
        }
        $('#cohete_nuevo').modal('hide');

    } else {
        document.querySelector("#msg_propulsores").innerHTML = `ID debe ser de 8 carácteres. Has ingresado: ${nuevoIdCohete.length}`
    }       
}

function nuevoPropulsorModal() {
    if(arrayPropulsores.length <= 2) {
        arrayPropulsores.push(new AddPropulsores(arrayPropulsores.length, pintarPropulsorModal(arrayPropulsores.length, false)));
        cargarListaPropulsores();
    } else {
        document.querySelector("#msg_propulsores").innerHTML = "No puedes agregar más de 3 propulsores."
    }
    
}

function borrarPropulsorModal(id_propulsor: number) {
    for (let i = 0; i < arrayPropulsores.length; i++) {
        let potenciaSeleccionada = document.querySelector("input[name=propulsor" + i + "]:checked").value;
        arrayPropulsores[i].potenciaSeleccionada = potenciaSeleccionada;
    }

    arrayPropulsores.splice(id_propulsor, 1);

    for (let i = 0; i < arrayPropulsores.length; i++) {
        arrayPropulsores[i].id_propulsor = i;
        arrayPropulsores[i].contenido = pintarPropulsorModal(i, true);
    }
    cargarListaPropulsores();
}

function cargarListaPropulsores() {
    let propulsores_modal = document.getElementById("lista_propulsores_modal");
    
    while (propulsores_modal.firstChild) {
        propulsores_modal.removeChild(propulsores_modal.firstChild);
    }

    for (let i = 0; i < arrayPropulsores.length; i++) {
    let li_listaprop = document.createElement("li");
    li_listaprop.id = "propulsor_modal_" + arrayPropulsores[i].id_propulsor;
    li_listaprop.innerHTML = arrayPropulsores[i].contenido;
    propulsores_modal.appendChild(li_listaprop);
    }
}




