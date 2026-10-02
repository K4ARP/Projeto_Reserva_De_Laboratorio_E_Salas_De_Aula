CREATE TABLE Usuario (
    id INT PRIMARY KEY IDENTITY(1,1),
    cpf VARCHAR(11),
    nomeCompleto VARCHAR(100),
    dataAniversario DATE,
    celular VARCHAR(20),
    email VARCHAR(100),
    [login] VARCHAR(50),
    senha VARCHAR(100),
    dataCadastro DATETIME,
    dataAcesso DATETIME
);

CREATE TABLE Laboratorio (
    codigo INT PRIMARY KEY,
    nome VARCHAR(100),
    capacidade INT,
    localizacao VARCHAR(100)
);

CREATE TABLE Sala (
    codigo INT PRIMARY KEY,
    nome VARCHAR(100),
    capacidade INT,
    localizacao VARCHAR(100)
);

CREATE TABLE Status (
    idStatus INT PRIMARY KEY IDENTITY(1,1),
    nomeStatus VARCHAR(20)
);

INSERT INTO Status (nomeStatus)
VALUES
('Livre'),
('Ocupado'),
('Bloqueado'),
('Reservado');