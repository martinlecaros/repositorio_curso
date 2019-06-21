let cohete1;
let cohete2;

let create_cohete1 = document.querySelector("#cohete1");
let create_cohete2 = document.querySelector("#cohete2");
let print_cohete1 = document.querySelector("#printcohete1");
let print_cohete2 = document.querySelector("#printcohete2");
let print_all_cohete = document.querySelector("#printallcohete");

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const vel_max_cohete1 = [10,30,80];
const vel_max_cohete2 = [30,40,50,50,30,10];

window.addEventListener('load', () => {
    create_cohete1.addEventListener("click", createCohetes, false);
    create_cohete2.addEventListener("click", createCohetes, false);
});

var createCohetes = (evento) => {
    let x = evento.target.dataset.type;
    switch(x) {
        case 'cohete1':
            cohete1 = coheteFactory.createCohete("cohete1");
            document.querySelector("button#cohete1").disabled = true;
            print_cohete1.addEventListener("click", printCohete, false);
            if(cohete2!=undefined) {
                print_all_cohete.addEventListener("click", printAllCohete, false);
            }   
            break
        case 'cohete2':
            cohete2 = coheteFactory.createCohete("cohete2");
            document.querySelector("button#cohete2").disabled = true;
            print_cohete2.addEventListener("click", printCohete, false);
            if(cohete1!=undefined) {
                print_all_cohete.addEventListener("click", printAllCohete, false);
            }
            break
    }
};

function loadImageCohete1() {
    let img = document.createElement("img");  
    document.querySelector("#img-cohete1").appendChild(img);
    document.querySelector("#img-cohete1 img").setAttribute("src", "img/cohete1.png");
}

function loadImageCohete2() {
    let img = document.createElement("img");  
    document.querySelector("#img-cohete2").appendChild(img);
    document.querySelector("#img-cohete2 img").setAttribute("src", "img/cohete2.png");
}

function loadDataCohete1() {
    setTimeout(function(){
        document.querySelector("#content-cohete1").innerHTML = `Cohete: ${cohete1.codigo} tiene ${cohete1.propulsores} propulsores y su máxima potencia es: ${vel_max_cohete1}.`;
        document.querySelector("#velocidad-cohete1").innerHTML = `Velocidad actual: ${cohete1.potencia.reduce(reducer)} y sus propulsores: ${cohete1.potencia}`;
        document.querySelector("#acdcbotones1").innerHTML = `<button type="button" class="btnacdc btn btn-sm" id="ac_cohete1" data-type="ac_cohete1"><i class="fas fa-arrow-up"></i></button>
        <button type="button" class="btnacdc btn btn-sm" id="de_cohete1" data-type="de_cohete1"><i class="fas fa-arrow-down"></i></button>`;
        let acc_cohete1 = document.querySelector("#ac_cohete1");
        let dec_cohete1 = document.querySelector("#de_cohete1");
        acc_cohete1.addEventListener("click", accCohete1, false);
        dec_cohete1.addEventListener("click", decCohete1, false);
    }, 1000);
}

function loadDataCohete2() {
    setTimeout(function(){
        document.querySelector("#content-cohete2").innerHTML = `Cohete: ${cohete2.codigo} tiene ${cohete2.propulsores} propulsores y su máxima potencia es: ${vel_max_cohete2}.`;
        document.querySelector("#velocidad-cohete2").innerHTML = `Velocidad actual: ${cohete2.potencia.reduce(reducer)} y sus propulsores: ${cohete2.potencia}`;
        document.querySelector("#acdcbotones2").innerHTML = `<button type="button" class="btnacdc btn btn-sm" id="ac_cohete2" data-type="ac_cohete2"><i class="fas fa-arrow-up"></i></button>
        <button type="button" class="btnacdc btn btn-sm" id="de_cohete2" data-type="de_cohete2"><i class="fas fa-arrow-down"></i></button>`;
        let acc_cohete2 = document.querySelector("#ac_cohete2");
        let dec_cohete2 = document.querySelector("#de_cohete2");
        acc_cohete2.addEventListener("click", accCohete2, false);
        dec_cohete2.addEventListener("click", decCohete2, false); 
    }, 1000);
}

var printCohete = (evento) => {
    let x = evento.target.dataset.type;
    switch(x) {
        case 'printcohete1':
            loadImageCohete1();
            loadDataCohete1();
            break
        case 'printcohete2':
            loadImageCohete2();
            loadDataCohete2();
            break
    }
};

var printAllCohete = () => {
    loadImageCohete1();
    loadImageCohete2();
    loadDataCohete1();
    loadDataCohete2();
};

var accCohete1 = () => {    
    document.querySelector("#de_cohete1").disabled = false;
    document.querySelector("#comentario-cohete1").innerHTML = ""; 
    if(cohete1.potencia[0] < 10) {
        cohete1.potencia[0] += 10;
    } else if(cohete1.potencia[1] < 30) {
        cohete1.potencia[1] += 10;
    } else if(cohete1.potencia[2] < 80) {
        cohete1.potencia[2] += 10;
    } else if(cohete1.potencia = vel_max_cohete1) {
        document.querySelector("#comentario-cohete1").innerHTML = `Has alcanzado la velocidad máxima total: ${cohete1.potencia.reduce(reducer)} y la de cada propulsor: ${cohete1.potencia}`;
    }
    if(cohete1.potencia.reduce(reducer)===120){
        document.querySelector("#comentario-cohete1").innerHTML = `Has alcanzado la velocidad máxima total: ${cohete1.potencia.reduce(reducer)} y la de cada propulsor: ${cohete1.potencia}`;
        document.querySelector("#ac_cohete1").disabled = true;  
    }
    document.querySelector("#velocidad-cohete1").innerHTML = `Velocidad actual: ${cohete1.potencia.reduce(reducer)} y sus propulsores: ${cohete1.potencia}`; 
}


var decCohete1 = () => {
    document.querySelector("#ac_cohete1").disabled = false;  
    document.querySelector("#comentario-cohete1").innerHTML = ""; 
    if(cohete1.potencia[2] > 0) {
        cohete1.potencia[2] -= 10;
    } else if(cohete1.potencia[1] > 0) {
        cohete1.potencia[1] -= 10;
    } else if(cohete1.potencia[0] > 0) {
        cohete1.potencia[0] -= 10;
    } else if(cohete1.potencia = [0,0,0]) {
        document.querySelector("#comentario-cohete1").innerHTML = `El cohete está detenido, velocidad: ${cohete1.potencia.reduce(reducer)}, propulsores: ${cohete1.potencia}`;
    }
    if(cohete1.potencia.reduce(reducer)===0){
        document.querySelector("#comentario-cohete1").innerHTML = `El cohete está detenido, velocidad: ${cohete1.potencia.reduce(reducer)}, propulsores: ${cohete1.potencia}`;
        document.querySelector("#de_cohete1").disabled = true;
    }
    document.querySelector("#velocidad-cohete1").innerHTML = `Velocidad actual: ${cohete1.potencia.reduce(reducer)} y sus propulsores: ${cohete1.potencia}`; 
}

var accCohete2 = () => {    
    document.querySelector("#de_cohete2").disabled = false;
    document.querySelector("#comentario-cohete2").innerHTML = ""; 
    if(cohete2.potencia[0] < 30) {
        cohete2.potencia[0] += 10;
    } else if(cohete2.potencia[1] < 40) {
        cohete2.potencia[1] += 10;
    } else if(cohete2.potencia[2] < 50) {
        cohete2.potencia[2] += 10;
    } else if(cohete2.potencia[3] < 50) {
        cohete2.potencia[3] += 10;
    } else if(cohete2.potencia[4] < 30) {
        cohete2.potencia[4] += 10;
    } else if(cohete2.potencia[5] < 10) {
        cohete2.potencia[5] += 10;
    } else if(cohete2.potencia = vel_max_cohete2) {
        document.querySelector("#comentario-cohete2").innerHTML = `Has alcanzado la velocidad máxima total: ${cohete2.potencia.reduce(reducer)} y la de cada propulsor: ${cohete2.potencia}`;
    }
    if(cohete2.potencia.reduce(reducer)===210){
        document.querySelector("#comentario-cohete2").innerHTML = `Has alcanzado la velocidad máxima total: ${cohete2.potencia.reduce(reducer)} y la de cada propulsor: ${cohete2.potencia}`;
        document.querySelector("#ac_cohete2").disabled = true;  
    }
    document.querySelector("#velocidad-cohete2").innerHTML = `Velocidad actual: ${cohete2.potencia.reduce(reducer)} y sus propulsores: ${cohete2.potencia}`; 
}

var decCohete2 = () => {
    document.querySelector("#ac_cohete2").disabled = false;  
    document.querySelector("#comentario-cohete2").innerHTML = ""; 
    if(cohete2.potencia[5] > 0) {
        cohete2.potencia[5] -= 10;
    } else if(cohete2.potencia[4] > 0) {
        cohete2.potencia[4] -= 10;
    } else if(cohete2.potencia[3] > 0) {
        cohete2.potencia[3] -= 10;
    } else if(cohete2.potencia[2] > 0) {
        cohete2.potencia[2] -= 10;
    } else if(cohete2.potencia[1] > 0) {
        cohete2.potencia[1] -= 10;
    } else if(cohete2.potencia[0] > 0) {
        cohete2.potencia[0] -= 10;
    } else if(cohete2.potencia = [0,0,0,0,0,0]) {
        document.querySelector("#comentario-cohete2").innerHTML = `El cohete está detenido, velocidad: ${cohete2.potencia.reduce(reducer)}, propulsores: ${cohete2.potencia}`;
    }
    if(cohete2.potencia.reduce(reducer)===0){
        document.querySelector("#comentario-cohete2").innerHTML = `El cohete está detenido, velocidad: ${cohete2.potencia.reduce(reducer)}, propulsores: ${cohete2.potencia}`;
        document.querySelector("#de_cohete2").disabled = true;
    }
    document.querySelector("#velocidad-cohete2").innerHTML = `Velocidad actual: ${cohete2.potencia.reduce(reducer)} y sus propulsores: ${cohete2.potencia}`; 
}