select *
from jobs
    inner join applications a on a.job_id=jobs.id
where a.job_seeker_id=$1;