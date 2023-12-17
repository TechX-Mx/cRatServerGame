const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const filePath = path.join(__dirname, parsedUrl.pathname);

  // Manejar solicitudes GET
  if (req.method === 'GET') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // Ocurrió un error al leer el archivo
        console.error(err);
        res.statusCode = 500;
        res.end('Error al leer el archivo');
      } else {
        // El archivo se leyó correctamente
        console.log('Archivo leído');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  } else if (req.method === 'POST') {
    // Manejar solicitudes POST
    let body = '';
    req.on('data', (chunk) => {
      // Recopilar los datos enviados en la solicitud
      body += chunk.toString();
    });
    req.on('end', () => {
      // Parsear los datos enviados como objeto
      const data = querystring.parse(body);

      // Obtener el nombre del archivo y el texto del cuerpo de la solicitud
      const archivo = data.archivo;
      const texto = data.texto;

      // Crear un objeto JSON con el texto proporcionado
      const objetoJson = { texto };

      // Convertir el objeto JSON a una cadena
      const jsonString = JSON.stringify(objetoJson);

      // Escribir la cadena JSON en el archivo
      fs.writeFile(`${archivo}.json`, jsonString, 'utf8', (err) => {
        if (err) {
          // Ocurrió un error al escribir el archivo
          console.error(err);
          res.statusCode = 500;
          res.end('Error al escribir el archivo');
        } else {
          // El archivo se escribió correctamente
          console.log('Archivo guardado');
          res.statusCode = 200;
          res.end('OK');
        }
      });
    });
  } else {
    // Manejar otras solicitudes (PUT, DELETE, etc.)
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});