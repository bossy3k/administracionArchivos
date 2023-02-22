var fs = require('fs');
var n=0;
fs.readFile('contenido.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(n+'->'+data);
  n++;
});
//Pruebas
