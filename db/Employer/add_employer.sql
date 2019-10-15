insert into employer(email, password, name, website, city, state)
values ($1, $2, $3, $4, $5, $6);

select email from employer
where email = $1;