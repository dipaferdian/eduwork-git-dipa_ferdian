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