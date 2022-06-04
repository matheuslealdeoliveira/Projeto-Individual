var database = require("../database/config")

function salvar(id, pontos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar():", id, pontos)
    var instrucao = `
        INSERT INTO notas (fkUsuario, desempenho) VALUES ('${id}', '${pontos}'); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvar
};