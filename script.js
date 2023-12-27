// script.js
const socket = new WebSocket('ws://localhost:3000'); // WebSocket server address

document.getElementById('yesBtn').addEventListener('click', () => {
    socket.send('YES');
});


document.getElementById('noBtn').addEventListener('click', () => {
    socket.send('NO');
});
