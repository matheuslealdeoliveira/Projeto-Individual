var quizModel = require("../models/quizModel");

function salvar(req) {
    var pontos = req.body.pontosServer;

        quizModel.salvar(pontos)
}

module.exports = {
    salvar
}