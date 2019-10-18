update jobs
set company = $2, city = $3, state = $4, description = $5, languages = $6, title = $6
where id = $1;

select *from employer;