CREATE TABLE Usuario(
    id INT PRIMARY KEY IDENTITY(1,1),
    cpf VARCHAR(11),
    nomeCompleto VARCHAR(120),
    dataAniversario DATE,
    celular VARCHAR(20),
    email VARCHAR(100),
    [login] VARCHAR(50),
    senha VARCHAR(10),
    dataCadastro DATETIME,
    dataAcesso DATETIME
);


CREATE TABLE Laboratorio(
    codigo INT PRIMARY KEY,
    nome VARCHAR(100),
    capacidade INT,
    localizacao VARCHAR(100)
);

CREATE TABLE HistoricoAcesso (
    idHistoricoAcesso INT PRIMARY KEY IDENTITY(1,1),
    idUsuario INT NOT NULL,
    dataAcesso DATETIME NOT NULL DEFAULT GETDATE(),

    CONSTRAINT FK_HistoricoAcesso_Usuario
        FOREIGN KEY (idUsuario)
        REFERENCES Usuario(idUsuario)
);



CREATE TABLE Sala(
    codigo INT PRIMARY KEY,
    nome VARCHAR(100),
    capacidade INT,
    localizacao VARCHAR(100)
);


CREATE TABLE Status(
    idStatus INT PRIMARY KEY IDENTITY(1,1),
    nomeStatus VARCHAR(20)
);


INSERT INTO Status (nomeStatus)
VALUES
('Livre'),
('Ocupado'),
('Bloqueado'),
('Reservado');

CREATE TABLE Reserva (
	idReserva INT IDENTITY(1,1) PRIMARY KEY,

	idUsuario INT NOT NULL,
	codigoLaboratorio INT NULL,
	codigoSala INT NULL,
	idStatus INT NOT NULL,

	dataReserva DATE NOT NULL,
	horarioInicio TIME(0) NOT NULL,
	horarioFim TIME(0) NOT NULL,

	CONSTRAINT FK_Reserva_Usuario
		FOREIGN KEY (idUsuario)
		REFERENCES Usuario(id),

	CONSTRAINT FK_Reserva_Laboratorio
		FOREIGN KEY (codigoLaboratorio)
		REFERENCES Laboratorio(codigo),

	CONSTRAINT FK_Reserva_Sala
		FOREIGN KEY (codigoSala)
		REFERENCES Sala(codigo),

	CONSTRAINT FK_Reserva_Status
		FOREIGN KEY (idStatus)
		REFERENCES Status(idStatus),

	CONSTRAINT CK_Reserva_UmRecurso
		CHECK (
			(codigoLaboratorio IS NOT NULL AND CODIGOsALA is null)
			OR
			(codigoLaboratorio IS NULL AND codigoSala IS NOT null)
		).

	CONSTRAINT CK_Reserva_Horario
		CHECK (horarioFim > horarioInicio)
);
