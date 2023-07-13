CREATE SCHEMA sprint6;

USE sprint6;

CREATE USER 'user12345'@'localhost' IDENTIFIED BY 'SkillStack';
GRANT ALL PRIVILEGES ON sprint6.* TO 'user12345'@'localhost';

-- SELECT * FROM <<BD>>.tabla;

