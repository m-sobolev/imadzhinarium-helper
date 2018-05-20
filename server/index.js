var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var games = []

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', (reason) => {
        console.log('a user Disconnected');
    });
    console.log('1');
    socket.emit("whatYouWant", {type:"hello"}, (data)=>{
        console.log("33",data);
    })
    console.log('2');
    socket.on('newGame', function(socket){
        console.log('newGame');

    });

    socket.on('joinGame', function(socket){
        console.log('newGame');
    });

    socket.on('StepGame1', function(socket){
        console.log('newGame');
    });

    socket.on('StepGame2', function(socket){
        console.log('newGame');
    });

    socket.on('StepGame3', function(socket){
        console.log('newGame');
    });

    socket.on('endGame', function(socket){
        console.log('newGame');
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

