create database if not exists crud_user;

use crud_user;

create table user(
	id int not null auto_increment primary key,
    username varchar(50) not null,
    userborndate varchar(50)not null
    usercpf varchar(50) not null
    useremail varchar(50) not null
    userpassword varchar(50) not null
);


