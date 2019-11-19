function validarCamposObligatorios() {
    var bandera = true
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'text') {
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = '<br>debe ingresar la cedula'
            }
            if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombre').innerHTML = '<br>ingrese el nombre'
            }
            if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellido').innerHTML = '<br>ingrese el apellido'
            }
            if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br>ingrese la direccion'
            }
            if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br>ingrese el numero de telefono'
            }
            if (elemento.id == 'fecha_nacimiento') {
                document.getElementById('mensajeFecNac').innerHTML = '<br>ingrese la fecha de nacimiento'
            }
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br>ingrese el correo'
            }
            elemento.style.border = '1px red solid'
            bandera = false
        }
    }
    if (!bandera) {
        alert("Tiene campos vacios")
    }
    return bandera
}

function validarcedula() {
    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); 
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud - 1) == total) {
            document.getElementById("mensajeCedula").innerHTML = ("Cedula Valida");
        } else {
            document.getElementById("mensajeCedula").innerHTML = ("Cedula Invalida");
        }
    }
}


function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    especiales = [8, 37, 39, 46, 6];

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function soloNumeros(evt) {
    if (window.event) {
        keynum = evt.keyCode;
    }
    else {
        keynum = evt.which;
    }
    if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13 || keynum == 6) {
        return true;
    }
    else {
        return false;
    }
}

function validarFecha() {
    var Fecha = document.getElementById('fecha_nacimiento').value;
    var Mensaje = '';

    if (Fecha.length == 10) {
        var Anio = Fecha.substr(6, 4); 
        var Mes = parseFloat(Fecha.substr(3, 2)) - 1; 
        var Dia = Fecha.substr(0, 2); 

        var VFecha = new Date(Anio, Mes, Dia);

        if ((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)) {
            Mensaje = 'Fecha correcta';
        }
        else {
            Mensaje = 'Fecha incorrecta';
        }
    }

    document.getElementById('mensajeFecNac').innerHTML = Mensaje;
}

function validarCorreo(correo){
	object=document.getElementById('correo');
	valueForm=object.value;
    var patron="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[ups]+([.][edu]+)*[.][ec]{1,5}";
    var patron2="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[est]+([.][ups]+)*([.][edu]+)*[.][ec]{1,5}";
	if(valueForm.search(patron)==0)
	{
        object.style.color="#000";
        document.getElementById('mensajeCorreo').innerHTML = ('Correo Valido');
		return;
	}else if(valueForm.search(patron2)==0){
        document.getElementById('mensajeCorreo').innerHTML = ('Correo Valido');
		return;
    }else{
    document.getElementById('mensajeCorreo').innerHTML = ('Correo Invalido');
    }
}
