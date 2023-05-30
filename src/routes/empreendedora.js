const express = require("express")
const EmpreendedoraController = require ("../controllers/empreendedoraController");

const router = express.Router();

router.get ("/", EmpreendedoraController.getAllEmpreendedoras)
router.post("/", EmpreendedoraController.createEmpreendedoras)
router.put("/:id", EmpreendedoraController.updateEmpreendedoras)
router.delete("/:id", EmpreendedoraController.deleteEmpreendedoras)
router.get("/:id", EmpreendedoraController.getEmpreendedoraById)


module.exports = router;
