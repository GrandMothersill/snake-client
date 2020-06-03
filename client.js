const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Connected to server: time to snake.');
  });

  conn.on('connect', () => {
    conn.write('Name: GMO');
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };