

//abrir
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
    // var elemento = document.getElementById('contenidoarchivo');
    //   elemento.innerHTML = contenido;
    editor = $('textarea').data('ace-editor');
    editor.setValue(contenido);
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);


//guardar
function descargarArchivo(nombreArchivo) {

    var texto = document.getElementById('contenidoarchivo').value;
    var contenidoEnBlob = new Blob([texto], {type: 'text/plain'});
    var lector = new FileReader();

    lector.onload = function(event) {

        var guardar = document.createElement('a');
        guardar.href = event.target.result;
        guardar.target = '_blank';
        guardar.download = nombreArchivo || 'archivo.dat';
        var clicEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': false,
            'cancelable': true
        });

        guardar.dispatchEvent(clicEvent);
    };

    lector.readAsDataURL(contenidoEnBlob);
};

window.onload = function() {

    document.getElementById('guardar').addEventListener( 'click', function () {

        descargarArchivo('archivo.txt');

    }, false);
};