bootstrapValidate('#email-validate','email:Ingresa una dirección de correo valida!');
bootstrapValidate('#password','min:6:La contraseña debe contener al menos 6 carácteres.');
bootstrapValidate('#password','max:12:La contraseña no debe superar los 12 carácteres.');
bootstrapValidate('#password-match', 'matches:#password:La contraseña debe coincidir.');
bootstrapValidate('#numero-validate', 'startsWith:34:Tu teléfono debe comenzar con el prefijo 34.');
bootstrapValidate('#numero-validate', 'regex:([0-9]{11}):Tu numero debe contener 11 dígitos.')
bootstrapValidate('#provincia-validate', 'required:Debes seleccionar una provincia.');
//bootstrapValidate('#provincia-validate', 'contains:something:Your text needs to contain something!')


if 


/*
bootstrapValidate('#provincia-validate', 'contains', function (isValid) {
  var text = 'Seleccionar provincia';
  if ('contains'===! text) {
      alert('Debes seleccionar una provincia.);
  } else {
      alert('ok');
  }
});



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

*/