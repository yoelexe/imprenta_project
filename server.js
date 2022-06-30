const { app } = require("./app");

// Models
const { relaciones } = require("./models/relaciones");

// Utils
const { db } = require("./utils/database.util");

// comprabamos la conexion con la base de datos
db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

// Establecemos las relaciones
relaciones();

// Sincronizar con la BD
db.sync();

// corremos el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
