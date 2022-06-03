CREATE DATABASE f1tech;

USE f1tech;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) unique,
	senha VARCHAR(50)
);

CREATE TABLE notas (
	fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
	idTentativa INT AUTO_INCREMENT PRIMARY KEY,
	desempenho INT
);

SELECT * FROM usuario;
SELECT * FROM notas;

DROP DATABASE f1tech;