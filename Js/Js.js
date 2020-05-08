'use strict'
window.addEventListener('load',function(){
    var formulario = document.querySelector("#formulario");
    formulario.addEventListener('submit', function(){

    var email = document.getElementById("ImputEmail");
    var texto = document.getElementById("ImputTexto");
    var nombre = document.getElementById("ImputNombre");

        if(email.value =="")
        {
            var error = document.getElementById("EmailError");
            error.innerHTML = "Tienes que ingresar un email...";
        }
        else{
            document.querySelector("#EmailError").style.display = "none";
        }

        if(texto.value == "")
        {
            var error = document.getElementById("TextoError");
            error.innerHTML = "Tienes que ingresar un comentario...";
        }
        else{
            document.querySelector("#TextoError").style.display = "none";
        }
        if(nombre.value == "")
        {
            var error = document.getElementById("NombreError");
            error.innerHTML = "Tienes que ingresar tu nombre...";
        }
        else{
            document.querySelector("#NombreError").style.display = "none";
        }
        
});
});