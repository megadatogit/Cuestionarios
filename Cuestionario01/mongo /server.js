


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://104.198.174.83:27017/db_mongo_etapaQ1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error de conexión:', err));

  const usuarioSchema = new mongoose.Schema({
    nombres: String,
    primerApellido: String,
    segundoApellido: String,
    lugarNacimiento: String,
    fechaNacimiento: Date,
    sexo: String,
    codigoPostal: String,
    entidadFederativa: String,
    municipio: String,
    calle: String,
    colonia: String,
    numeroExterior: String,
    numeroInterior: String,
    telefono1: String,
    telefono2: String,
    correoElectronico: String
  })
const Usuario = mongoose.model('Usuario', usuarioSchema);

app.post('/guardar', async (req, res) => {
  try {
    console.log("req.body:", req.body)
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({ message: 'Datos guardados correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al guardar los datos' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
                                                    