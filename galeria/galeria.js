var direccion
var par2
var num = 0
var imagenes = ['/imagenes/foto1.png', 'imagenes/foto2.png', 'imagenes/foto3.png', 
'imageness/foto4.png', 'imagenes/foto5.png', 'imagenes/foto6.png', 
'imagenes/foto7.png', 'imagenes/foto8.png', 'imagenes/foto9.png', 
'imagenes/foto10.png'];

function Inicio() {
    console.log(imagenes)
    num = 0
    for (var i = 0; i < 5; i++) {
        imagenes[i] = Math.floor(Math.random() * (10))}
    console.log(imagenes)
    par2 = imagenes.slice(0, 5)
    console.log(par2)
    console.log(num)
    direccion = "imagenes/foto" + par2[num] + ".png";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
    document.getElementById("anterior").disabled = true;
    document.getElementById("siguiente").disabled = false;
}
function Siguiente() {
    num++
    if (num == 4) {
        document.getElementById("siguiente").disabled = true;
        document.getElementById("anterior").disabled = false;
    }
    else if (num == 0) {
        document.getElementById("anterior").disabled = true;
        document.getElementById("siguiente").disabled = false;
    } else {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = false;
    }
    direccion = "imagenes/foto" + par2[num] + ".png";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
}

function Anterior() {
    num--
    if (num == 4) {
        document.getElementById("siguiente").disabled = true;
        document.getElementById("anterior").disabled = false;
    }
    else if (num == 0) {
        document.getElementById("anterior").disabled = true;
        document.getElementById("siguiente").disabled = false;
    } else {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = false;
    }
    direccion = "imagenes/foto" + par2[num] + ".png";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
}

