const net = require('net');

let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;
  stdin.on('data', (key) => handleUserInput(key, connection));
  return stdin;
};

module.exports = { setupInput };


const handleUserInput = function(key, conn) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    conn.write('Move: up');
  } else if (key === '\u0064') {
    conn.write('Move: right');
  } else if (key === '\u0073') {
    conn.write('Move: down');
  } else if (key === '\u0061') {
    conn.write('Move: left');
  } else if (key === '\u0071') {
    conn.write('Say: AHHHHH');
  } else if (key === '\u0065') {
    conn.write('Say: sSsSsS');
  };
};