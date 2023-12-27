// script.js
const socket = new WebSocket('https://alexandrakraeva.github.io/localhost_58165/'); // WebSocket server address

document.getElementById('yesBtn').addEventListener('click', () => {
    socket.send('YES');
});


document.getElementById('noBtn').addEventListener('click', () => {
    socket.send('NO');
});
