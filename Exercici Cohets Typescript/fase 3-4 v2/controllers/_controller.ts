
/////////////////

let create_cohete = document.querySelector("#cohete");
const reducer = (accumulator, currentValue) => accumulator + currentValue;

window.addEventListener('load', () => {
    create_cohete.addEventListener("click", selectCohete, false);
    print_cohete.addEventListener("click", printCohete, false); 
    print_all_cohete.addEventListener("click", printAllCohetes, false); 
});

/// GLOBAL OBJECTS
let cohete: Cohete;
let cohete_vel_actual: number;
let cohete_vel_maxima: number;
let cohetes_libreria = new Map();
let cohetes_object = {};
let count: number = 0;
let nombre: string;

/// DATA
let data: object = 
{ 
    cohete1: {codigo: "32WESSDS", propulsores: 3, potencia: [10,30,80]},
    cohete2: {codigo: "LDSFJA32", propulsores: 6, potencia: [30,40,50,50,30,10]}
};

// FUNCTIONS: SELECT, CREATE AND SAVE COHETE
function selectCohete() {
    
    let size_data = Object.keys(data).length;
    let values_cohete = Object.values(data)[count];

    if(count < size_data) {
        let codigo = values_cohete.codigo
        let propulsores = values_cohete.propulsores
        let potencia = values_cohete.potencia
        cohete = new Cohete(codigo,propulsores,potencia);
        console.log(cohete);
            
        // save cohete in a MAP()
        cohetes_object.key = "cohete"+count;
        console.log(cohetes_object);
        
        cohetes_object.value = {"codigo": cohete.codigo, "propulsores": cohete.propulsores, "potencia": cohete.potencia};

    
    }
    // console.log("Map: " + cohetes_libreria);
    console.log("obj: " + cohetes_object);
    count += 1;
};


/// PRINT COHETE
function printCohete() {
    cohete_vel_actual = 0;
    cohete_vel_maxima = cohete.potencia.reduce(reducer);
    document.querySelector("#coh").innerHTML = `${cohete.print(cohete.codigo,cohete.propulsores,cohete.potencia)}`;
    document.querySelector("#velocidad_max").innerHTML = `${cohete_vel_maxima}`;
    document.querySelector("#velocidad_id").innerHTML = `${cohete_vel_actual}`;
};


/// ACELERAR - FRENAR

let acccohete = document.querySelector("#ac_cohete");
acccohete.addEventListener("click", accCohete, false);

function accCohete() {
    if(cohete_vel_actual < cohete_vel_maxima) {
        cohete_vel_actual += 10;
    }    
    document.querySelector("#velocidad_id").innerHTML = `${cohete_vel_actual}`;
};


function decCohete() {
    if(cohete_vel_actual > 0) {
        cohete_vel_actual -= 10;
    }
    document.querySelector("#velocidad_id").innerHTML = `${cohete_vel_actual}`;
};