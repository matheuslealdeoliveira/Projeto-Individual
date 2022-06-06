var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvar", function (req, res) {
    quizController.salvar(req, res);
})

router.post("/carregar", function (req, res) {
    quizController.carregar(req, res);
})

module.exports = router;