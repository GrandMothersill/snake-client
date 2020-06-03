const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Connected to server: time to snake.');
  });

  conn.on('connect', () => {
    conn.write('Name: GMO');
    //setInterval(function() { conn.write('Move: up'), 50 });
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };