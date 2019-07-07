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

// document.querySelector('#showpassword').addEventListener('click', showPassword);

function showPassword() {
    var p1 = document.querySelector('#password1');
    var p2 = document.querySelector('#password2');
    if (p1.type === "password" && p2.type === "password") {
        p1.type = "text";
        p2.type = "text";
    } else {
        p1.type = "password";
        p2.type = "password";
    }
}



// Validación Busqueda
var form = document.querySelector("#busqueda");
form.addEventListener('submit', validarBusqueda);

document.querySelector("#input-buscador").addEventListener('focus', () => document.querySelector("#input-buscador").value = null);

function validarBusqueda(evt) {
    var busqueda = document.querySelector("#input-buscador").value;
    evt.preventDefault();
    var mensaje = "Please enter 3 characters at least.";

    if (busqueda.length < 3 || busqueda.length === null || busqueda === mensaje) {
        document.querySelector("#input-buscador").value = mensaje;
    } else {
        console.log("Has realizado la búsqueda correctamente.");
        document.querySelector("#busquedaok").innerHTML = "Busqueda ok";
    }
}

// Validación Login

document.querySelector("#login").addEventListener('submit', validarLogIn);

function validarLogIn() {
    var inputEmail = document.querySelector("#inputEmail");
    var inputPassword = document.querySelector("#inputPassword");

    if (inputEmail.length === 0 && inputPassword.length === 0) {
        $("input#inputEmail").addClass("danger");
        document.querySelector("#feedback-email").innerHTML = "Enter a proper email address";
        $("#inputPassword").addClass("danger");
        $("#feedback-password").text("Password must be at least 8 characters");
    }
    if (validateEmail(inputEmail) === false) {
        $("#inputEmail").addClass("danger");
        $("#feedback-password").text = "Enter a proper email address";
        $("#inputPassword").addClass("danger");
        $("#feedback-password").text = "Password must be at least 8 characters";
    }
    if (inputPassword.length < 8) {
        document.querySelector("#feedback-email").classList.remove('text-danger');
        $("#inputEmail").addClass("green");
        document.querySelector("#feedback-email").classList.add("text-success");
        document.querySelector("#feedback-email").innerHTML = "Your email is ok";
        document.querySelector("#feedback-email").classList.add("text-danger");
        document.querySelector("#feedback-password").innerHTML = "Password must be at least 8 characters";
    }
    if (validateEmail(inputEmail) === true && inputPassword.length >= 8) {
        // document.querySelector("#inputEmail").classList.add("border-success");
        // document.querySelector("#feedback-email").classList.remove("text-danger");
        // document.querySelector("#feedback-email").classList.add("text-success");
        // document.querySelector("#feedback-email").innerHTML = "Your email is ok";
        // document.querySelector("#inputPassword").classList.add("border-success");
        // document.querySelector("#feedback-password").classList.remove("text-danger");
        // document.querySelector("#feedback-password").classList.add("text-success");
        // document.querySelector("#feedback-password").innerHTML = "Password is ok";

        setTimeout(function() {
            let node = document.querySelector("#login");
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            document.querySelector("#feedback-ok").innerHTML = "Has ingresado correctamente";
            console.log("Has ingresado correctamente");
        }, 2000);
    }
}

function validateEmail(email) {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(email).toLowerCase());
}