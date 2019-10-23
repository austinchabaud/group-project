update job_seeker
set email = $2, phone = $3, github = $4, linkedin = $5, city = $6, state = $7, portfolio = $8, languages = $9
where id = $1;

select *
from job_seeker
where id = $1;