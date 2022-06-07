var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.post("/salvarNotas", function (req, res) {
    perfilController.salvarNotas(req, res);
})

router.post("/carregarNotas", function (req, res) {
    perfilController.carregarNotas(req, res);
})

router.post("/salvarFav", function (req, res) {
    perfilController.salvarFav(req, res);
})


module.exports = router;