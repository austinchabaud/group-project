select *
from job_seeker j
    inner join applications a on a.job_seeker_id=j.id
where a.job_id=$1;