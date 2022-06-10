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

CREATE TABLE favorito (
  fkUsuario INT UNIQUE,
  FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
  piloto VARCHAR(40),
  equipe VARCHAR(40)
);

SELECT * FROM usuario;
SELECT * FROM quiz;
SELECT * FROM favorito;

-- SELECIONAR MEDIA E TENTATIVAS 
SELECT ROUND(AVG(desempenho),2) AS 'media', COUNT(fkUsuario) AS 'tentativas' FROM quiz WHERE fkUsuario = 1; 

-- SELECIONAR PILOTO E EQUIPE
 SELECT piloto AS 'pilotos', equipe AS 'equipes' FROM favorito WHERE fkUsuario = 1; 