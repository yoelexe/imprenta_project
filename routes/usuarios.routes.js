const { Router } = require("express");

// Middlewares

// Controladores
const {
  listarUsuarios,
  registrarUsuario,
} = require("../controllers/usuarios.controller");

const usuariosRoutes = Router();

usuariosRoutes.get("/", listarUsuarios);

usuariosRoutes.post("/", registrarUsuario);

module.exports = { usuariosRoutes };
