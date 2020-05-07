'use strict'
window.addEventListener('load',function(){
    var formulario = document.querySelector("#formulario");
    formulario.addEventListener('submit', function(){

    var email = document.getElementById("ImputEmail");
    var texto = document.getElementById("ImputTexto");
    var nombre = document.getElementById("ImputNombre");

        if(email.textContent =="")
        {
            var error = document.getElementById("EmailError");
            error.innerHTML = "Tienes que ingresar un email..."
        }

});
});