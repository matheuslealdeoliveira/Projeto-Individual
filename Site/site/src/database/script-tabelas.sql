CREATE DATABASE f1tech;

USE f1tech;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(80) unique,
	senha VARCHAR(50)
);

CREATE TABLE quiz (
  idQuiz INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
  desempenho INT
) AUTO_INCREMENT = 1000;

CREATE TABLE mural (
  idMural INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
  texto VARCHAR(300)
) AUTO_INCREMENT = 10000;

CREATE TABLE favorito (
  idUsuario INT PRIMARY KEY,
  fkUsuario INT,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
  piloto VARCHAR(40),
  equipe VARCHAR(40)
);

SELECT * FROM usuario;
SELECT * FROM quiz;
SELECT * FROM mural;
SELECT * FROM favorito;

SELECT ROUND(AVG(desempenho),2) AS 'media', COUNT(fkUsuario) AS 'tentativas' FROM quiz WHERE fkUsuario = 1; 