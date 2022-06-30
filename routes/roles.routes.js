const { Router } = require("express");

// Middlewares

// Controladores
const {
  listarRoles,
  registrarRol,
} = require("../controllers/roles.controller");

const rolesRoutes = Router();

rolesRoutes.get("/", listarRoles);

rolesRoutes.post("/", registrarRol);

module.exports = { rolesRoutes };
