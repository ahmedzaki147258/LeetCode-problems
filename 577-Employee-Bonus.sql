# Write your MySQL query statement below
select name, bonus
from employee
left join bonus on employee.empId=bonus.empId
where bonus<1000 OR bonus is null