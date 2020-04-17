var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Andrés',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});