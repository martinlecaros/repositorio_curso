////////////////////////////////////////
// Validación Sign up
////////////////////////////////////////

$("#signup").submit(function(e) {
    e.preventDefault();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {

                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


$("#showPasswordbnt").on('click', function() {
    var p1 = document.querySelector('#password1');
    var p2 = document.querySelector('#password2');
    if (p1.type === "password" && p2.type === "password") {
        p1.type = "text";
        p2.type = "text";
    } else {
        p1.type = "password";
        p2.type = "password";
    }
});



////////////////////////////////////////
// Validación Busqueda
////////////////////////////////////////


document.querySelector("#busqueda").addEventListener('submit', validarBusqueda);

document.querySelector("#input-buscador").addEventListener('focus', () => document.querySelector("#input-buscador").value = null);

function validarBusqueda(evt) {
    evt.preventDefault();
    var busqueda = document.querySelector("#input-buscador").value;
    var mensaje = "Please enter 3 characters at least.";

    if (busqueda.length < 3 || busqueda.length === null || busqueda === mensaje) {
        document.querySelector("#input-buscador").value = mensaje;
    } else {
        console.log("Has realizado la búsqueda correctamente.");
        document.querySelector("#busquedaok").innerHTML = "Búsqueda realizada correctamente.";
    }
}


////////////////////////////////////////
// Validación Login
////////////////////////////////////////

document.querySelector("#login").addEventListener('submit', validarLogIn);
var inputEmail = document.querySelector("#inputEmail");
var inputPassword = document.querySelector("#inputPassword");

$("#login").submit(function(e) {
    e.preventDefault();
});

function validarLogIn() {
    if (inputEmail.value.length === 0 && inputPassword.value.length === 0) {
        $("#inputEmail").addClass("border-danger");
        $("#feedback-email").text("Email address is empty");
        $("#inputPassword").addClass("border-danger");
        $("#feedback-password").text("Password field is empty");
    } else if (validateEmail(inputEmail.value) === false) {
        $("#inputEmail").addClass("border-danger");
        $("#feedback-email").text("Enter a proper email address");
        $("#inputPassword").addClass("border-danger");
        $("#feedback-password").text("Password field is empty");
    } else if (validateEmail(inputEmail.value) === true && inputPassword.value.length < 8) {
        $("#inputEmail").removeClass("border-danger");
        $("#feedback-email").removeClass("text-danger");
        $("#inputEmail").addClass("border-success");
        $("#feedback-email").addClass("text-success");
        $("#feedback-email").text("Your email is ok");
        $("#inputPassword").addClass("border-danger");
        $("#feedback-password").text("Password must be at least 8 characters");
    } else if (validateEmail(inputEmail.value) === true && inputPassword.value.length >= 8) {
        $("#inputEmail").removeClass("border-danger");
        $("#feedback-email").removeClass("text-danger");
        $("#inputEmail").addClass("border-success");
        $("#feedback-email").addClass("text-success");
        $("#feedback-email").text("Your email is ok");
        $("#inputPassword").removeClass("border-danger");
        $("#feedback-password").removeClass("text-danger");
        $("#inputPassword").addClass("border-success");
        $("#feedback-password").addClass("text-success");
        $("#feedback-password").text("Password is ok");

        setTimeout(function() {
            var login = document.querySelector("#login");
            if (login.parentNode) {
                login.parentNode.removeChild(login);
            }
            $("#feedback-ok").text("Has ingresado correctamente");
            console.log("Has ingresado correctamente");
        }, 2000);
    }
}

function validateEmail(email) {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(email).toLowerCase());
}