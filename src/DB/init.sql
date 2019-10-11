-- Applicant===================================

drop table if exists job_seeker;
-- ======ADD APPLICANT
insert into job_seeker(username, email, password)
values ($1, $2, $3);

select username, password from job_seeker
where password = $3;
-- ================= ADD INFO
insert into job_seeker(name, phone, github, linkedin, city, state, portfolio, languages)
values ($4, $5, $6, $7, $8, $9, $10, $11);

select * from job_seeker;
-- ========================= DELETE
delete from job_seeker
where id = $1;

select * from job_seeker;
-- ====================== UPDATE
update job_seeker
set name = $4, phone = $5, github = $6, linkedin = $7, city = $8, state = $9, portfolio = $10, languages = $11
where id = $1;

select *from job_seeker;
-- ===========================
-- ===========================
-- ===========================
-- EMPLOYER===================

drop table is exists EMPLOYER
-- =======================ADD EMPLOYER
insert into employer(name, email, password)
values ($1, $2, $3);

select email, password from employer
where password = $3;
-- ========================EMPLOYER INFO
insert into employer(phone, linkedin, website, city, state)
values ($4, $5, $6, $7, $8);

select * from employer;
-- ======================DELETE
delete from employer
where id = $1;

select * from employer;
-- ========================UPDATE
update employer
set phone = $5, linkedin = $6, website = $7, city = $8, state = $9
where id = $1;

select *from employer;
-- ======================================================
-- ======================================================
-- =============================JOB POSTINGS
create table jobs(
    id serial primary key,
    company text not null,
    city text not null,
    state text not null,
    description text not null,
    languages text not null
);
-- =======================ADD jobs
insert into jobs(company, city, state, description, languages)
values ($1, $2, $3, $4, $5);

select * from jobs



-- =========================DELETE JOBS

delete from jobs
where id = $1;

select * from jobs;

-- =========================UPDATE JOBS

update jobs
set company = $2, city = $3, state = $4, description = $5, languages = $6
where id = $1;

select *from employer;
-- =================================

