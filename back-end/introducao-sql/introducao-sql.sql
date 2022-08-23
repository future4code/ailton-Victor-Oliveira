USE `ailton-victor-oliveira`;
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
INSERT INTO Actor
VALUES(
  "005", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"
);
#EXERCICIO-2
#B)Entrada duplicada '002,' para chave 'PRIMARY'
#EXERCICIO-3
#C)DEU NULL,PORQUE ESTA VAZIO
SELECT id,name,salary,birth_date,gender from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"0022",
 "Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
 "2017-11-02",
 "8"
);
SELECT id,title,synopsis,release_Date,rating  from Movie WHERE id >= 21;
SELECT * from Movie WHERE title = "Dona Flor e Seus Dois Maridos";
SELECT id,title,synopsis, rating from Movie WHERE   rating = 7 ;
SELECT * FROM Movie WHERE title like "d%";
SELECT * FROM Movie;
