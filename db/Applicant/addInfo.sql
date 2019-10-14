insert into job_seeker(name, phone, github, linkedin, city, state, portfolio)
values ($4, $5, $6, $7, $8, $9, $10, $11);

select * from job_seeker;