drop table if exists users;

create table users(
    id int not null auto_increment,
    user_id VARCHAR(255) DEFAULT (uuid()),
    name varchar(255) not null,
    email varchar(50) not null,
    phone varchar(50) not null,
    gender varchar(50) not null,
    address varchar(255) not null,

    PRIMARY KEY (id)
);

INSERT INTO users(
                  user_id,
                  name,
                  email,
                  phone,
                  gender,
                  address)
VALUES (
        uuid(),
        'dipa ferdian',
        'dipaferdian2@gmail.com',
        '082129627860',
        'male',
        'KP. Kabandungan');

SELECT name as myname,
       phone as myphone,
       address as myaddress

FROM users;