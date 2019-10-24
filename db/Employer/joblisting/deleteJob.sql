delete from applications
where job_id = $1;

delete from jobs
where id = $1;

select *
from jobs
where company = $2;