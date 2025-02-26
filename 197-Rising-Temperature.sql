# Write your MySQL query statement below
-- SELECT DATEDIFF(year, '2017/08/25', '2011/08/25') AS DateDiff;

select w.id
from Weather w
join Weather z 
where DATEDIFF(w.recordDate, z.recordDate)=1 AND w.temperature > z.temperature 
