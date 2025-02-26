# Write your MySQL query statement below
select a.machine_id, cast(avg(b.timestamp-a.timestamp) as decimal(10,3)) as processing_time
from Activity a
join Activity b
where a.machine_id=b.machine_id AND a.process_id=b.process_id AND a.activity_type='start' AND b.activity_type='end'
group by a.machine_id