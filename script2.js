alert("Bienvenido a Fer y San"); 
let nombreProyecto = "Fer y San"; 
console.log(nombreProyecto); 
document.getElementById("mensaje").innerHTML ="Bienvenido a Fer y San"; 
function mostrarInformacion(){ 
 
alert("Información cargada correctamente"); 
 
} 
function Registrarse(){ 
 
alert("Registro exitoso"); 
 
} 
function capturarDato(){ 
 
let dato =document.getElementById("nombreUsuario").value; 
 
alert("Dato ingresado: " + dato); 
 
} 
function actualizarTitulo(){ 
 
document.getElementById("tituloProyecto").innerHTML = 
"Detalles para tus momentos especiales"; 
 
} 
function cambiarColor(){ 
 
document.body.style.backgroundColor = 
"#2a5a9a"; 
 
} 
function validarCampo(){ 
 
let valor = 
document.getElementById("campoValidacion").value; 
 
if(valor==""){ 
 
alert("Debe ingresar información"); 
 
}else{ 
 
alert("Información válida"); 
 
} 
 
} 
let contador = 0; 
 
function sumarClick(){ 
 
contador++; 
 
document.getElementById("contador").innerHTML = 
contador; 
 
} 
setInterval(function(){ 
 
let fecha = new Date(); 
 
document.getElementById("reloj").innerHTML = 
fecha.toLocaleTimeString(); 
},1000);