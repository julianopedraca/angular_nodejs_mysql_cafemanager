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

--@block
CREATE TABLE product(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR (255),
    price INTEGER,
    status VARCHAR(20),
    PRIMARY KEY (id)
);

--@block
SELECT * FROM product;

--@block
ALTER TABLE product
ADD categoryId INTEGER NOT NULL ;

--@block
CREATE TABLE bill(
    id INT NOT NULL AUTO_INCREMENT,
    uuid VARCHAR (200) NOT NULL,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    contactNumber VARCHAR(20) NOT NULL,
    paymentMerhod VARCHAR(50) NOT NULL,
    total INT NOT NULL,
    productDetails JSON DEFAULT NULL,
    createdBy VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

--@block
DESC bill

--@block
SELECT * FROM bill;
