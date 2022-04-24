select * from customer
select * from orders
select * from salesman

--1. Write a query to display all orders from the orders table issued by the salesman ‘Paul Adman’
SELECT * FROM orders WHERE salesman_id in(SELECT salesman_id  FROM salesman WHERE name='Paul Adam');
	--- 2. Write a query to display all orders for the salesman who belongs to city London.
	select * from orders where salesman_id in(select salesman_id from salesman where city='london')
--3. Write a query to find all the orders issues against the salesman who may works for customer whose id is  3007
select * from orders where salesman_id in (select distinct salesman_id from orders where customer_id =3007);
--- Write a query to display all the orders which values are greater than the average order value for 10th October 2012.
select * from orders where purch_amt>(select avg(purch_amt) from orders where ord_date='10/10/2012');
--Write a query to find all orders attributed to a salesman in New York.
select * from orders where salesman_id in(select salesman_id from salesman where city='new york');
-- Write a query to display the commission of all the salesmen servicing customers in Paris.
select commission from salesman where salesman_id in(select salesman_id from customer where city='paris');
--Write a query to display all the customers whose id is 2001 bellow the salesman ID of Mc Lyon.
select * from customer where customer_id in (select salesman_id -2001 from salesman where name='Mc Lyon');
-- Write a query to count the customers with grades above New York's average.
select grade,count(*) from customer group by grade having grade>(select avg(grade) from customer where city='new york');
-- Write a query to display all customers with orders on October 5, 2012
select b.*,a.cust_name from orders b,customer a where a.customer_id=b.customer_id and b.ord_date='2012-08-05';
---10.ans:
Select salesman_id,name  from salesman a where 1 <  (select count(*) from customer where salesman_id=a.salesman_id);
---11.ans:
Select * from orders a where purch_amt >=(select avg(purch_amt) from orders b where b.customer_id = a.customer_id;
----12.ans:
Select ord_date, sum (purch_amt) from orders a group by ord_date having sum (purch_amt) >(select 1000.00 + max(purch_amt) from orders b  where a.ord_date = b.ord_date);

----13.ans:
Select customer_id,cust_name, city from customer where exists (select * from customer where city='london');

----14.ans:
Select *  from salesman  where salesman_id in ( select distinct salesman_id  from customer a  where exists (select * from customer b where b.salesman_id=a.salesman_id and b.cust_name<>a.cust_name));

---15.ans:
Select * from salesman a where exists (select * from customer b  where a.salesman_id=b.salesman_id  and 1<(select count (*)from orders where orders.customer_id = b.customer_id));

-----16.ans:
Select * from orders where purch_amt <(select max (purch_amt) from orders a, customer b where  a.customer_id=b.customer_id and b.city='london');

-----17.ans:
Select * from customer where grade > all(select grade from customer where city='new york');

----18.ans:
Select p.pro_name as "product name", p.pro_price as "price",c.com_name as "company" from item_mast p, company_mast c where p.pro_com = c.com_id and p.pro_price in( select max(p.pro_price) from item_mast p where p.pro_com = c.com_id
     );
----19.ans:
Select emp_fname, emp_lname  from emp_details  where emp_dpt in (select dpt_code from emp_department where dpt_allotment= (select min(dpt_allotment) from emp_department where dpt_allotment >
(select min(dpt_allotment)  from emp_department )));
-----20.ans:
Select emp_department.dpt_name from emp_details inner join emp_department on emp_dpt =dpt_code group by emp_department.dpt_name having count(*) > 2;
----21.ans:
Select a.cust_name as "customer name",  a.city, b.name as "salesman", b.commission from customer a inner join salesman b on a.salesman_id=b.salesman_id;
----22.ans:
Select a.cust_name as "customer name", a.city, b.name as "salesman", b.city,b.commission   from customer a   inner join salesman b   on a.salesman_id=b.salesman_id  where b.commission>.12  and a.city<>b.city;
----23.ans:
Select a.cust_name,a.city,a.grade, b.name as "salesman", b.city  from customer a  left outer join salesman b  on a.salesman_id=b.salesman_id  where a.grade<300  order by a.customer_id;
-----24.ans:
Select a.cust_name,a.city,a.grade,  b.name as "salesman", b.city  from customer a  right outer join salesman b  on b.salesman_id=a.salesman_id order by b.salesman_id;
----25.ans:
Select a.cust_name,a.city,a.grade,  b.name as "salesman",  c.ord_no, c.ord_date, c.purch_amt  from customer a  right outer join salesman b on b.salesman_id=a.salesman_id  right outer join orders c on c.customer_id=a.customer_id;
----26.ans:
Select a.cust_name,a.city, b.ord_no, b.ord_date,b.purch_amt as "order amount"  from customer a  full outer join orders b  on a.customer_id=b.customer_id  where a.grade is not null;
----27.ans:
Select a.cust_name,a.city, b.ord_no, b.ord_date,b.purch_amt as "order amount"  from customer a  full outer join orders b on a.customer_id=b.customer_id  where a.grade is not null;






