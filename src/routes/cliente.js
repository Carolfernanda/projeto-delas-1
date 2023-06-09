const express = require("express")
const ClienteController = require ("../controllers/clienteControllers");

const router = express.Router();

router.get ("/", ClienteController.getAllClientes)
router.post("/", ClienteController.createClientes)
router.put("/:id", ClienteController.updateClientes)
router.delete("/:id", ClienteController.deleteClientes)
router.get("/:id", ClienteController.getByIdClientes)



module.exports = router;
