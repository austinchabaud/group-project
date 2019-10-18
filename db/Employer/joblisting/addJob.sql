insert into jobs(company, city, state, description, languages, title)
values ($1, $2, $3, $4, $5, $6);

select * from jobs