create table users
(
    id varchar(255) not null,
    email varchar(255) not null default '',
    password varchar(255) not null default '',
    balance numeric
)