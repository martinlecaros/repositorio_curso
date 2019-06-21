var cohete1;
var cohete2;
var create_cohete1 = document.querySelector("#cohete1");
var create_cohete2 = document.querySelector("#cohete2");
var print_cohete1 = document.querySelector("#printcohete1");
var print_cohete2 = document.querySelector("#printcohete2");
var print_all_cohete = document.querySelector("#printallcohete");
var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
var vel_max_cohete1 = [10, 30, 80];
var vel_max_cohete2 = [30, 40, 50, 50, 30, 10];
window.addEventListener('load', function () {
    create_cohete1.addEventListener("click", createCohetes, false);
    create_cohete2.addEventListener("click", createCohetes, false);
});
var createCohetes = function (evento) {
    var x = evento.target.dataset.type;
    switch (x) {
        case 'cohete1':
            cohete1 = coheteFactory.createCohete("cohete1");
            document.querySelector("button#cohete1").disabled = true;
            print_cohete1.addEventListener("click", printCohete, false);
            if (cohete2 != undefined) {
                print_all_cohete.addEventListener("click", printAllCohete, false);
            }
            break;
        case 'cohete2':
            cohete2 = coheteFactory.createCohete("cohete2");
            document.querySelector("button#cohete2").disabled = true;
            print_cohete2.addEventListener("click", printCohete, false);
            if (cohete1 != undefined) {
                print_all_cohete.addEventListener("click", printAllCohete, false);
            }
            break;
    }
};
function loadImageCohete1() {
    var img = document.createElement("img");
    document.querySelector("#img-cohete1").appendChild(img);
    document.querySelector("#img-cohete1 img").setAttribute("src", "img/cohete1.png");
}
function loadImageCohete2() {
    var img = document.createElement("img");
    document.querySelector("#img-cohete2").appendChild(img);
    document.querySelector("#img-cohete2 img").setAttribute("src", "img/cohete2.png");
}
function loadDataCohete1() {
    setTimeout(function () {
        document.querySelector("#content-cohete1").innerHTML = "Cohete: " + cohete1.codigo + " tiene " + cohete1.propulsores + " propulsores y su m\u00E1xima potencia es: " + vel_max_cohete1 + ".";
        document.querySelector("#velocidad-cohete1").innerHTML = "Velocidad actual: " + cohete1.potencia.reduce(reducer) + " y sus propulsores: " + cohete1.potencia;
        document.querySelector("#acdcbotones1").innerHTML = "<button type=\"button\" class=\"btnacdc btn btn-sm\" id=\"ac_cohete1\" data-type=\"ac_cohete1\"><i class=\"fas fa-arrow-up\"></i></button>\n        <button type=\"button\" class=\"btnacdc btn btn-sm\" id=\"de_cohete1\" data-type=\"de_cohete1\"><i class=\"fas fa-arrow-down\"></i></button>";
        var acc_cohete1 = document.querySelector("#ac_cohete1");
        var dec_cohete1 = document.querySelector("#de_cohete1");
        acc_cohete1.addEventListener("click", accCohete1, false);
        dec_cohete1.addEventListener("click", decCohete1, false);
    }, 1000);
}
function loadDataCohete2() {
    setTimeout(function () {
        document.querySelector("#content-cohete2").innerHTML = "Cohete: " + cohete2.codigo + " tiene " + cohete2.propulsores + " propulsores y su m\u00E1xima potencia es: " + vel_max_cohete2 + ".";
        document.querySelector("#velocidad-cohete2").innerHTML = "Velocidad actual: " + cohete2.potencia.reduce(reducer) + " y sus propulsores: " + cohete2.potencia;
        document.querySelector("#acdcbotones2").innerHTML = "<button type=\"button\" class=\"btnacdc btn btn-sm\" id=\"ac_cohete2\" data-type=\"ac_cohete2\"><i class=\"fas fa-arrow-up\"></i></button>\n        <button type=\"button\" class=\"btnacdc btn btn-sm\" id=\"de_cohete2\" data-type=\"de_cohete2\"><i class=\"fas fa-arrow-down\"></i></button>";
        var acc_cohete2 = document.querySelector("#ac_cohete2");
        var dec_cohete2 = document.querySelector("#de_cohete2");
        acc_cohete2.addEventListener("click", accCohete2, false);
        dec_cohete2.addEventListener("click", decCohete2, false);
    }, 1000);
}
var printCohete = function (evento) {
    var x = evento.target.dataset.type;
    switch (x) {
        case 'printcohete1':
            loadImageCohete1();
            loadDataCohete1();
            break;
        case 'printcohete2':
            loadImageCohete2();
            loadDataCohete2();
            break;
    }
};
var printAllCohete = function () {
    loadImageCohete1();
    loadImageCohete2();
    loadDataCohete1();
    loadDataCohete2();
};
var accCohete1 = function () {
    document.querySelector("#de_cohete1").disabled = false;
    document.querySelector("#comentario-cohete1").innerHTML = "";
    if (cohete1.potencia[0] < 10) {
        cohete1.potencia[0] += 10;
    }
    else if (cohete1.potencia[1] < 30) {
        cohete1.potencia[1] += 10;
    }
    else if (cohete1.potencia[2] < 80) {
        cohete1.potencia[2] += 10;
    }
    else if (cohete1.potencia = vel_max_cohete1) {
        document.querySelector("#comentario-cohete1").innerHTML = "Has alcanzado la velocidad m\u00E1xima total: " + cohete1.potencia.reduce(reducer) + " y la de cada propulsor: " + cohete1.potencia;
    }
    if (cohete1.potencia.reduce(reducer) === 120) {
        document.querySelector("#comentario-cohete1").innerHTML = "Has alcanzado la velocidad m\u00E1xima total: " + cohete1.potencia.reduce(reducer) + " y la de cada propulsor: " + cohete1.potencia;
        document.querySelector("#ac_cohete1").disabled = true;
    }
    document.querySelector("#velocidad-cohete1").innerHTML = "Velocidad actual: " + cohete1.potencia.reduce(reducer) + " y sus propulsores: " + cohete1.potencia;
};
var decCohete1 = function () {
    document.querySelector("#ac_cohete1").disabled = false;
    document.querySelector("#comentario-cohete1").innerHTML = "";
    if (cohete1.potencia[2] > 0) {
        cohete1.potencia[2] -= 10;
    }
    else if (cohete1.potencia[1] > 0) {
        cohete1.potencia[1] -= 10;
    }
    else if (cohete1.potencia[0] > 0) {
        cohete1.potencia[0] -= 10;
    }
    else if (cohete1.potencia = [0, 0, 0]) {
        document.querySelector("#comentario-cohete1").innerHTML = "El cohete est\u00E1 detenido, velocidad: " + cohete1.potencia.reduce(reducer) + ", propulsores: " + cohete1.potencia;
    }
    if (cohete1.potencia.reduce(reducer) === 0) {
        document.querySelector("#comentario-cohete1").innerHTML = "El cohete est\u00E1 detenido, velocidad: " + cohete1.potencia.reduce(reducer) + ", propulsores: " + cohete1.potencia;
        document.querySelector("#de_cohete1").disabled = true;
    }
    document.querySelector("#velocidad-cohete1").innerHTML = "Velocidad actual: " + cohete1.potencia.reduce(reducer) + " y sus propulsores: " + cohete1.potencia;
};
var accCohete2 = function () {
    document.querySelector("#de_cohete2").disabled = false;
    document.querySelector("#comentario-cohete2").innerHTML = "";
    if (cohete2.potencia[0] < 30) {
        cohete2.potencia[0] += 10;
    }
    else if (cohete2.potencia[1] < 40) {
        cohete2.potencia[1] += 10;
    }
    else if (cohete2.potencia[2] < 50) {
        cohete2.potencia[2] += 10;
    }
    else if (cohete2.potencia[3] < 50) {
        cohete2.potencia[3] += 10;
    }
    else if (cohete2.potencia[4] < 30) {
        cohete2.potencia[4] += 10;
    }
    else if (cohete2.potencia[5] < 10) {
        cohete2.potencia[5] += 10;
    }
    else if (cohete2.potencia = vel_max_cohete2) {
        document.querySelector("#comentario-cohete2").innerHTML = "Has alcanzado la velocidad m\u00E1xima total: " + cohete2.potencia.reduce(reducer) + " y la de cada propulsor: " + cohete2.potencia;
    }
    if (cohete2.potencia.reduce(reducer) === 210) {
        document.querySelector("#comentario-cohete2").innerHTML = "Has alcanzado la velocidad m\u00E1xima total: " + cohete2.potencia.reduce(reducer) + " y la de cada propulsor: " + cohete2.potencia;
        document.querySelector("#ac_cohete2").disabled = true;
    }
    document.querySelector("#velocidad-cohete2").innerHTML = "Velocidad actual: " + cohete2.potencia.reduce(reducer) + " y sus propulsores: " + cohete2.potencia;
};
var decCohete2 = function () {
    document.querySelector("#ac_cohete2").disabled = false;
    document.querySelector("#comentario-cohete2").innerHTML = "";
    if (cohete2.potencia[5] > 0) {
        cohete2.potencia[5] -= 10;
    }
    else if (cohete2.potencia[4] > 0) {
        cohete2.potencia[4] -= 10;
    }
    else if (cohete2.potencia[3] > 0) {
        cohete2.potencia[3] -= 10;
    }
    else if (cohete2.potencia[2] > 0) {
        cohete2.potencia[2] -= 10;
    }
    else if (cohete2.potencia[1] > 0) {
        cohete2.potencia[1] -= 10;
    }
    else if (cohete2.potencia[0] > 0) {
        cohete2.potencia[0] -= 10;
    }
    else if (cohete2.potencia = [0, 0, 0, 0, 0, 0]) {
        document.querySelector("#comentario-cohete2").innerHTML = "El cohete est\u00E1 detenido, velocidad: " + cohete2.potencia.reduce(reducer) + ", propulsores: " + cohete2.potencia;
    }
    if (cohete2.potencia.reduce(reducer) === 0) {
        document.querySelector("#comentario-cohete2").innerHTML = "El cohete est\u00E1 detenido, velocidad: " + cohete2.potencia.reduce(reducer) + ", propulsores: " + cohete2.potencia;
        document.querySelector("#de_cohete2").disabled = true;
    }
    document.querySelector("#velocidad-cohete2").innerHTML = "Velocidad actual: " + cohete2.potencia.reduce(reducer) + " y sus propulsores: " + cohete2.potencia;
};
