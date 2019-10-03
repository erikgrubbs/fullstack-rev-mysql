DROP DATABASE IF EXISTS hrla32students;

CREATE DATABASE hrla32students;

USE hrla32students;

CREATE TABLE students (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  imgurl varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO students (id, name) VALUES (1, "Aaron");
INSERT INTO students (id, name) VALUES (2, "Daniel");
INSERT INTO students (id, name) VALUES (3, "Daylan");
INSERT INTO students (id, name) VALUES (4, "Dustin");
INSERT INTO students (id, name) VALUES (5, "Forest");
INSERT INTO students (id, name) VALUES (6, "Harris");
INSERT INTO students (id, name) VALUES (7, "James");
INSERT INTO students (id, name) VALUES (8, "Jinho");
INSERT INTO students (id, name) VALUES (9, "Jiyoon");
INSERT INTO students (id, name) VALUES (10, "Ryan");


INSERT INTO images (id, imgurl) VALUES (1, "https://avatars3.githubusercontent.com/u/51430324?s=400&v=4");
INSERT INTO images (id, imgurl) VALUES (2, "https://avatars3.githubusercontent.com/u/51337432?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (3, "https://avatars0.githubusercontent.com/u/46062606?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (4, "https://avatars0.githubusercontent.com/u/51143431?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (5, "https://avatars3.githubusercontent.com/u/53932945?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (6, "https://avatars2.githubusercontent.com/u/47763652?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (7, "https://avatars0.githubusercontent.com/u/47793897?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (8, "https://avatars0.githubusercontent.com/u/39547193?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (9, "https://avatars0.githubusercontent.com/u/52810429?s=460&v=4");
INSERT INTO images (id, imgurl) VALUES (10, "https://avatars0.githubusercontent.com/u/53192333?s=460&v=4");

-- SELECT * FROM students;
-- SELECT * FROM images;
-- SELECT * FROM images WHERE for_student = ?;

-- SELECT name, imgurl FROM students INNER JOIN images ON images.id = students.id;