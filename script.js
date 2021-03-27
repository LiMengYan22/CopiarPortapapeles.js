// <!-- ---------BOTON COPIAR:-------------- -->

<button id="copiar"> Copiame </button><br>
<input type="text" placeholder="pruebame, presiona CTL+V">

// <!-- ---------SCRIPT:-------------- -->
<script> // inicio del boton de copia
var playButton = $('#copiar'); // Se obtiene el id del boton clicable
playButton.click(function(){ // evento click para el boton antes definido
copyToClipboard(); // llamada a funcion copyToClipboard() (Está mas abajo)
});// fin del boton de copia

// Funcion copytoClipboard
function copyToClipboard() {
$("body").append("<input type='text' id='temp'>"); // Aqui se crea un input dinamicamente con un id para luego asignarle un valor sombreado
$("#temp").val("EDITAESTO creado por GAMMAFP").select(); // Aqui se obtiene el id del boton que hemos creado antes y se le agrega un valor y luego se le sombrea con select(). 
Para agregar lo que se quiere copiar editar:
val("EDITAESTOAQUÍ")
document.execCommand("copy"); // document.execCommand("copy") manda a copiar el texto seleccionado en el documento
$("#temp").remove();
}
</script>

// <!-- ---------BOTON TEXTO:-------------- -->
<p id="mi_parrafo">Texto que quiero copiar</p>
<button> Copiar esto al portapapeles </button>
