const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2');
const dbConfig = require('./db-config');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Conexión a la base de datos MySQL
const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

// Manejar conexiones de Socket.IO
io.on('connection', socket => {
    console.log('Usuario conectado:', socket.id);

    // Cargar posición inicial del jugador desde la base de datos y enviar al cliente
    connection.query('SELECT * FROM players WHERE id = ?', [1], (err, results) => {
        if (err) {
            console.error('Error al obtener la posición inicial del jugador:', err);
            return;
        }
        const player = results[0];
        if (player) {
            socket.emit('initialPlayerPosition', player);
        }
    });

    // Cargar todos los obstáculos desde la base de datos y enviar al cliente
    connection.query('SELECT * FROM obstacles', (err, results) => {
        if (err) {
            console.error('Error al obtener los obstáculos:', err);
            return;
        }
        socket.emit('initialObstacles', results);
    });

    // Manejar actualizaciones de posición del jugador
    socket.on('playerPosition', position => {
        // Actualizar posición del jugador en la base de datos
        connection.query('UPDATE players SET x = ?, y = ? WHERE id = ?', [position.x, position.y, 1], (err, result) => {
            if (err) {
                console.error('Error al actualizar la posición del jugador:', err);
                return;
            }
            // Emitir nueva posición del jugador a todos los clientes
            io.emit('playerPositionUpdate', position);
        });
    });

    // Manejar la adición de nuevos obstáculos
    socket.on('addObstacle', obstacle => {
        // Insertar un nuevo obstáculo en la base de datos
        connection.query('INSERT INTO obstacles (x, y) VALUES (?, ?)', [obstacle.x, obstacle.y], (err, result) => {
            if (err) {
                console.error('Error al agregar un obstáculo:', err);
                return;
            }
            // Obtener el ID del nuevo obstáculo insertado
            const newObstacleId = result.insertId;
            // Emitir el nuevo obstáculo con su ID a todos los clientes
            io.emit('newObstacle', { id: newObstacleId, x: obstacle.x, y: obstacle.y });
        });
    });

    // Manejar la desconexión de un usuario
    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});