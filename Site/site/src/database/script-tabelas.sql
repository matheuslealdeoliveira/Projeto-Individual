CREATE DATABASE f1tech;

USE f1tech;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) unique,
	senha VARCHAR(50)
);

CREATE TABLE notas (
  idQuiz INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
  desempenho INT
) AUTO_INCREMENT = 1000;

SELECT * FROM usuario;
SELECT * FROM notas;

DROP DATABASE f1tech;