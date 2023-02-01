CREATE DATABASE IF NOT EXISTS `db`
USE `db`

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
)

INSERT INTO `users`
VALUES 
  (1, "Rakan", 'rakan@email.com', '123456'),
  (2, "Xayah", 'xayah@email.com', '123456')