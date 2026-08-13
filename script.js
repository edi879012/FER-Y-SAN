alert("Bienvenido a Fer y San");
let nombreProyecto = "Fer y San";
console.log(nombreProyecto);
document.getElementById("mensaje").innerHTML ="Bienvenido a Fer y San";
function mostrarInformacion()
    {alert("Información cargada correctamente");}
function Registrarse()
    {alert("Registro exitoso");}
function capturarDato()
    {let dato =document.getElementById("nombreUsuario").value;
    alert("Dato ingresado: " + dato);}
function actualizarTitulo()
    {document.getElementById("tituloProyecto").innerHTML ="Detalles para tus momentos especiales";}
function cambiarColor()
    {document.body.style.backgroundColor ="#2a5a9a";}
function validarCampo()
    {let valor =document.getElementById("campoValidacion").value;
    if(valor=="")
        {alert("Debe ingresar información");}
    else
        {alert("Información válida");}
    }
let contador = 0;
function sumarClick()
    {contador++;document.getElementById("contador").innerHTML =contador;}

setInterval(function()
    {let fecha = new Date();document.getElementById("reloj").innerHTML =fecha.toLocaleTimeString();},1000);

let productos = ["Flores","Globos","Personalizado"];
console.log(productos);
let proyecto = {nombre:"FER Y SAN",
                autor:"Edison Cevallos"};
console.log(proyecto);
document.getElementById("informacionProyecto").innerHTML = "<h3nombre</h3><p>autor</p>";
localStorage.setItem("usuario","Edison");

document.getElementById("guardar").addEventListener("click",
    function(){let valor =
    document.getElementById("datoGuardar").value;
    localStorage.setItem("datoProyecto",valor);alert("Información guardada");});
    document.getElementById("datoRecuperado").innerHTML =localStorage.getItem("datoProyecto");

document.getElementById("boton").addEventListener("click",
    function(){alert("Evento ejecutado");});

let tarjeta =document.createElement("div");tarjeta.innerHTML ="<h3>Nueva Tarjeta</h3>";
document.getElementById("contenedor").appendChild(tarjeta);

productos.forEach(function(item){let elemento =
document.createElement("li");elemento.textContent =item;
document.getElementById("lista").appendChild(elemento);});

document.getElementById("eliminar").addEventListener("click",
function(){let lista =document.getElementById("lista");lista.removeChild(lista.lastElementChild);});
<div class="dashboard">

<div class="card">
Total Registros
</div>

<div class="card">
Usuarios
</div>

<div class="card">
Información General
</div>

