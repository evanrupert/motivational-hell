create table users
(
    id uuid not null constraint users_pkey primary key,
    email varchar(255) not null default '',
    password varchar(255) not null default '',
    balance numeric
)