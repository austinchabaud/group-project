insert into job_seeker(username, email, password, name , phone, github, linkedin, city, state, portfolio, languages)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);

select username, email from job_seeker
where email = $2;