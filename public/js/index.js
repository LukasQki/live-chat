let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Not server',
        text: 'Yup. its works as expected'
    });
});
socket.on('disconnect', function () {
    consoel.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});