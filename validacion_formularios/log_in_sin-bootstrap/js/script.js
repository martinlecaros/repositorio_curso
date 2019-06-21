function check() {
    var input_email = document.querySelector("#inputEmail").value;
    var input_password = document.querySelector("#inputPassword").value;
    var output_mensaje = document.querySelector("#mensaje");
	
    if (input_email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) 
    && input_password.match(/^.{4,8}$/)) {
        output_mensaje.innerText = `datos ok`
    } else {
        output_mensaje.innerText = `El email ingresado: ${input_email} no es correcto.`
	}
};