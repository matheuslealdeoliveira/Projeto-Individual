var perfilModel = require("../models/perfilModel");

function salvarNotas(req, res) {
    var id = req.body.idServer;
    var pontos = req.body.pontosServer;

        perfilModel.salvarNotas(id, pontos)
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

function carregarNotas(req, res) {
    var id = req.body.idServer;

        perfilModel.carregarNotas(id)
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

function salvarFav(req, res) {
    var piloto = req.body.pilotoServer;
    var equipe = req.body.equipeServer;
    var id = req.body.idServer;

        perfilModel.salvarFav(id, piloto, equipe)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao salvar o piloto e equipe favorito! ERRO: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    salvarNotas,
    carregarNotas,
    salvarFav
}