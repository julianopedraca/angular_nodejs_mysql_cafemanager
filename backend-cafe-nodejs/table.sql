CREATE TABLE user (
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    contactNumber varchar(20),
    email varchar(50),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)
);

--@block
INSERT INTO user(name, contactNumber, email, password, status, role)
VALUES (
    'Admin',
    '123123123',
    'admin@gmail.com',
    'admin',
    'true',
    'admin'
);

--@block
SELECT * FROM user;

--@block
CREATE TABLE category(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

--@block
SELECT * FROM category;

