insert into job_seeker(username, email, password)
values ($1, $2, $3);

select username, password from job_seeker
where password = $3;