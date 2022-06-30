// Models
const { Roles } = require("../models/roles.model");
const { Usuarios } = require("../models/usuarios.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const listarRoles = catchAsync(async (req, res, next) => {
  const roles = await Roles.findAll({
    include: [
      {
        model: Usuarios,
        attributes: ["id", "nombre", "apellido", "email", "estado"],
      },
    ],
  });
  res.status(200).json(roles);
});

const registrarRol = catchAsync(async (req, res, next) => {
  const { nombre } = req.body;

  const nuevoRol = await Roles.create({ nombre });

  res.status(201).json({ nuevoRol });
});

const buscarRol = catchAsync(async (req, res, next) => {});

module.exports = { listarRoles, registrarRol };
