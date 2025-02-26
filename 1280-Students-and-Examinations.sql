# Write your MySQL query statement below
select s.student_id, s.student_name, sub.subject_name, count(Examinations.student_id) as attended_exams
from Students s
cross join Subjects sub
left join Examinations on Examinations.student_id=s.student_id AND Examinations.subject_name=sub.subject_name
group by s.student_id, s.student_name, sub.subject_name
order by s.student_id, sub.subject_name