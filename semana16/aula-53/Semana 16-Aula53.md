• SHOW TABLES;
• SELECT * FROM Movie;

- ALTER TABLE Movie
ADD lancamento DATE; // para adicionar coluna na tabela

- ALTER TABLE Movie
CHANGE id id INT PRIMARY KEY; // para alterar o formato da coluna da tabela


/**********   SÓ CONSEGUIR FAZER ESSAS TABELAS HOJE   **********/


MINHA TABELA MOVIE:
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
	title TEXT NOT NULL,
	synopsis VARCHAR(255) NOT NULL
);


INSERT INTO Movie (id, title, synopsis)
VALUES ("A", "Forrest Gump – O Contador de Histórias", "Lorem ipsum dolor sit amet, consectetur adipiscing elit");

INSERT INTO Movie (id, title, synopsis)
VALUES
("B", "Um Estranho no Ninho", "Etiam ac lacus suscipit, hendrerit ligula a, tincidunt."),
("C", "Curtindo a Vida Adoidado", "Vestibulum quis odio accumsan eleifend est vel."),
("D", "Os Caça-Fantasmas", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
("E", "A Lista de Schindler", "Etiam ac lacus suscipit, hendrerit ligula a, tincidunt."),
("F", "De Volta para o Futuro", "Vestibulum quis odio accumsan eleifend est vel."),
("G", "Um Sonho de Liberdade", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
("H", "Guerra nas Estrelas", "Etiam ac lacus suscipit, hendrerit ligula a, tincidunt."),
("I", "O Mágico de Oz", "Vestibulum quis odio accumsan eleifend est vel."),
("J", "O Poderoso Chefão", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

SELECT * FROM Movie



/**********   RESPOSTAS:   **********/
### Exercício 1
a) A chave Estrangeira serve para criar relações entre tabelas. Ela deve sempre se refernciar a uma PRIMARY
KEY da outra uma tabela. No meu cado usei o ID.

b) INSERT INTO Rating VALUES
("Comentário 02", "Filme mais ou menos", 8.6, "B"),
("Comentário 03", "Filme maior paia", 2.3, "C"),
("Comentário 04", "Filme Chula", 3.2, "D"),
("Comentário 05", "Filme Excelente", 10.0, "E"),
("Comentário 06", "Filme sussa", 7.8, "F"),
("Comentário 07", "Filme sussa", 7.8, "G"),
("Comentário 08", "Filme mais ou menos", 9.8, "H");

c) Não é possível adicionar ou atualizar uma linha filha, pois não tem esse ID na tabela Movie.

d) 





