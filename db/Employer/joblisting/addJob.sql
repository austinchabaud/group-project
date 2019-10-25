insert into jobs
    (title, company, city, state, description, languages, date_added)
values
    ($1, $2, $3, $4, $5, $6, $7);

select *
from jobs
where company = $2;