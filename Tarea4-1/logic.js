ListaGblobal=[];
if(localStorage.getItem("Usuarios")){
ListaGblobal = JSON.parse(localStorage.getItem("Usuarios"));
}

// Esta funcion muestra el primer paso del registro
function mostrarPaso1Registro() {
    var divInicio = document.getElementById("pasoInicio");
    var paso1r = document.getElementById("paso1Registro");

    divInicio.style.display = "none";
    paso1r.className = "block";
}

// Esta funcion muestra el segundo paso del registro cuando los campos estan validados
function mostrarPaso2Registro() {
    var paso1R = document.getElementById("paso1Registro");
    var paso2r = document.getElementById("paso2Registro");

    if (validar_llenosPaso1R() && validarPass()) {

        paso1R.style.display = "none";
        paso2r.className = "block";
    }
}

// valida campos del paso 2 registro
function validar_llenosPaso2R() {
    var validado = true;
    var divpaso1R = document.getElementById("paso2Registro");
    var imputsdPaso = divpaso1R.getElementsByTagName("input");
    for (const item of imputsdPaso) {
        if (item.value != "") {
            item.classList = "form-control is-valid";

        } else {
            item.classList = "form-control is-invalid";
            validado = false;
        }
    }
    return validado;

}

// esta funcion obtiene los primeros datos de la identidad
function get_dosdatos() {
    var identi = document.forms["FormularioCharlie"]["identidad"];

    if (identi.value.length == 13) {
        var datos = identi.value.substring(0, 2);
    }
    return datos;
}

// funcion de departamentos por identidad 
function departamentremove() {
    var identi = document.forms["FormularioCharlie"]["identidad"];
    identi = get_dosdatos();

    var departamentoo = document.forms["FormularioCharlie"]["departamento"];
    
    if (identi == "01") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Atlantida"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "02") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Colon"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "03") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Comayagua"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "04") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Compan"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "05") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Cortes"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "06") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Choluteca"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "07") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "El Paraiso"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "08") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Francisco Morazan"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "09") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Gracias a Dios"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "10") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Intibuca"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "11") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Islas de la Bahia"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "12") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "La Paz"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } if (identi == "13") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Lempira"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "14") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Ocotepeque"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "15") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Olancho"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "16") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Santa Barbara"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "17") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Valle"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    if (identi == "18") {

        departamentoo.removeAttribute("disabled");
        departamentoo.value = "Yoro"
        departamentoo.classList = "form-control is-valid";
    }else{
        departamentoo.classList = "form-control is-valid";
    } 
    

}






function validar_llenosPaso1R() {

    var validado = true;
    var divpaso1R = document.getElementById("paso1Registro");
    var imputsdPaso = divpaso1R.getElementsByTagName("input");
    for (const item of imputsdPaso) {
        if (item.value != "") {
            item.classList = "form-control is-valid";

        } else {
            item.classList = "form-control is-invalid";
            validado = false;
        }
    }
    return validado;
}





function validarPass() {

    var pass = document.forms["FormularioCharlie"]["pass"].value;
    var pass2 = document.forms["FormularioCharlie"]["passc"];
    var validado = false;
    if (pass == pass2.value) {
        validado = true;
        pass2.classList = "form-control";
    } else {
        pass2.classList = "form-control is-invalid";

    }
    return validado;

}
// esta funcion guarda al usuario registrado
function guardar() {

    var correo = document.forms["FormularioCharlie"]["correo"].value;
    var contra = document.forms["FormularioCharlie"]["pass"].value;
    var nombre = document.forms["FormularioCharlie"]["nombre"].value;
    var identidad = document.forms["FormularioCharlie"]["identidad"].value;
    var departamento = document.forms["FormularioCharlie"]["departamento"].value;

    var user = [correo, contra, nombre, identidad, departamento];
    ListaGblobal.push(user);
    localStorage.setItem("Usuarios", JSON.stringify(ListaGblobal));

}

function registro(formulario, evento){
alert("Usuario registrado con exito");
    evento.preventDefault();
guardar(formulario);
}

function mostrar_inicio(){
    var divInicio = document.getElementById("pasoInicio");
    var paso2r = document.getElementById("paso2Registro");

    divInicio.style.display = "block";
    paso2r.className = "d-none";
}

function inicio_sesion(){
    var correoIni = document.forms["FormularioCharlie"]["correoI"].value
    var contraIni = document.forms["FormularioCharlie"]["passI"].value
    var validado = false;
ListaGblobal.forEach(p => {
      
    if(correoIni== p[0] && contraIni == p[1]){
        validado = true;
        alert("Inicio de sesion completa")
        var btn = document.getElementById("Iniciar");
        btn.innerHTML= '<a href="https://youtu.be/JwNuMI3k7m0" class="btn btn-primary" id="Iniciar">Inicie sesion</a>'
        }
        else{
            validado= false;
            alert("El usuario que escribio no existe")
        }
        
        return validado;
    });
}



























