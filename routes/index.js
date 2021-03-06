const router = require("express").Router();
const HeroeController = require("../controllers/HeroeController");


router.get("/", HeroeController.index)
router.get("/detalle/:heroe", HeroeController.details)

//dc-marvel
router.get("/publisher/:publisher", HeroeController.publisher)


module.exports = router;