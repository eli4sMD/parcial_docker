const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/buscar-animal', async (req, res) => {
  const animalNombre = req.query.nombre;
  try {
    const response = await axios.get(`https://es.wikipedia.org/api/rest_v1/page/summary/${animalNombre}`);
    const data = response.data;
    const descripcion = data.extract;
    const imagenUrl = data.thumbnail ? data.thumbnail.source : null;

    if (descripcion) {
      res.json({ descripcion, imagenUrl });
    } else {
      res.send('No se encontró información para el animal especificado.');
    }
  } catch (error) {
    console.error('Error al obtener datos de Wikipedia', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});