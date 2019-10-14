insert into employer(email, password, name, phone, linkedin, website, city, state)
values ($1, $2, $3, $4, $5, $6, $7, $8);

select email from employer
where email = $1;