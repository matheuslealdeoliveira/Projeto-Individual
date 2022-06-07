var database = require("../database/config")

function salvarNotas(id, pontos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar():", id, pontos)
    var instrucao = `
        INSERT INTO quiz (fkUsuario, desempenho) VALUES ('${id}', '${pontos}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function carregarNotas(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregar():", id)
    var instrucao = `
        SELECT ROUND(AVG(desempenho),2) AS 'media', COUNT(fkUsuario) AS 'tentativas' FROM quiz WHERE fkUsuario = ${id}; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function salvarFav(id, piloto, equipe) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvarFav():", id, piloto, equipe)
    var instrucao = `
        INSERT INTO favorito (idUsuario, piloto, equipe) VALUES ('${id}', '${piloto}', '${equipe}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarNotas,
    carregarNotas,
    salvarFav
};