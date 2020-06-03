const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting ...');
connect();