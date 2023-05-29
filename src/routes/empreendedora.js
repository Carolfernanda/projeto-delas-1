const express = require("express")
const EmpreendedoraController = require ("../controllers/empreendedoraController");

const router = express.Router();

router.get ("/", EmpreendedoraController.getAllEmpreendedoras);
router.post("/", EmpreendedoraController.createEmpreendedoras);

module.exports = router;
