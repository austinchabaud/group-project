update employer
set phone = $5, linkedin = $6, website = $7, city = $8, state = $9
where id = $1;

select *from employer;