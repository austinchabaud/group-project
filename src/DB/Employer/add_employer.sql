insert into employer(name, email, password)
values ($1, $2, $3);

select email, password from employer
where password = $3;