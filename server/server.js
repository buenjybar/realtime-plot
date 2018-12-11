const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const subs = new Map();

io.on("connection", function (socket) {
    console.log("connection", socket.id);
    socket.on('join', function (room) {
        console.log('user joined:', room);
        socket.join(room);

        if (subs.has(socket.id)) {
            return;
        }

        const interval = setInterval(() => {
            console.log('emit data');
            // socket.to(room).emit('bravo');
            // socket.broadcast.emit('blublu');
            socket.emit(room, 'hello');
        }, 1000);

        subs.set(socket.id, interval);
    });

    socket.on("disconnect", function () {
        if (subs.has(socket.id)) {
            const interval = subs.get(socket.id);
            clearInterval(interval);
            subs.delete(socket.id);
        }
        console.log("disconnection", socket.id)
    });
});

http.listen(3000, function () {
    console.log("listening on *:3000")
});
