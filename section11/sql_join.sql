drop table if exists products;
drop table if exists categories;
drop table if exists users;


create table users(
    id int not null auto_increment,
    email varchar(50) not null,
    name varchar(255) not null,
    password varchar(255) not null,
    role varchar(50) not null,
    status varchar(255) not null,

     created_at timestamp default now(),
     updated_at timestamp default now(),

    PRIMARY KEY (id)
);

create table categories(
    id int not null auto_increment,
    user_id int(4) not null,
    code varchar(255) not null,
    name varchar(255) not null,
    slug varchar(255) not null,
    description text default null,
    status varchar(255) not null,
    photo varchar(255) default null,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) references users(id)
);

create table products(
    id int not null auto_increment,
    category_id int(4) not null,
    user_id int(4) not null,
    code varchar(255) not null,
    name varchar(255) not null,
    slug varchar(255) not null,
    description longtext,
    photo varchar(255) default null,
    qty double default 0,
    unit varchar(50) default 0,
    price double default 0,
    status varchar(255),

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);


INSERT INTO users(email, name, password, role, status, created_at, updated_at)

VALUES ('dipaferdian2@gmail.com', 'dipaferdian', 'admin', 'admin', 'active', NOW(), NOW());

INSERT INTO users(email, name, password, role, status, created_at, updated_at)

VALUES ('syeikh@gmail.com', 'syeikh', 'admin', 'admin', 'active', NOW(), NOW());

SET @user = (select id from users limit 1);

INSERT INTO categories(user_id, code, name, slug, description, status, photo)

VALUES (@user, 'A1', 'CAR', 'car_electric', 'New Car', 'active', 'http://avanza.png');

SET @category = (select id from categories limit 1);

INSERT INTO products(category_id, user_id, code, name, slug, description, photo, qty, unit, price, status)

VALUES (@category, @user, 'A1', 'AVANZA', 'avanza_electric', 'NEW Avanza car', 'http://avanza.png', 1, '1', 1000.0000, 'available');

INSERT INTO products(category_id, user_id, code, name, slug, description, photo, qty, unit, price, status)

VALUES (@category, @user, 'T1', 'Tesla', 'tesla_electric', 'NEW Tesla car', 'http://tesla.png', 1, '1', 2000.0000, 'available')


SELECT users.id, users.name, c.name as categories, p.name products FROM users
LEFT JOIN categories c on users.id = c.user_id
LEFT JOIN products p on c.id = p.category_id and users.id = p.user_id
