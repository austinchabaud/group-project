update job_seeker
set name = $4, phone = $5, github = $6, linkedin = $7, city = $8, state = $9, portfolio = $10, languages = $11
where id = $1;

select *from job_seeker;