var quizModel = require("../models/quizModel");

function salvar(req, res) {
    var id = req.body.idServer;
    var pontos = req.body.pontosServer;

        quizModel.salvar(id, pontos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao salvar o resultado do quiz! ERRO: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function carregar(req, res) {
    var id = req.body.idServer;

        quizModel.carregar(id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao mostrar o resultado do quiz! ERRO: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    salvar,
    carregar
}