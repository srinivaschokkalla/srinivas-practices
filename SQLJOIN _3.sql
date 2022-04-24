--Provide a query showing the Invoices of customers who are from Brazil. The resultant table should show the customer's full name, Invoice ID, Date of the invoice and billing country. 

Select CONCAT(c.FirstName,'',c.LastName) as 'Full Name',i.InvoiceId,i.InvoiceDate,i.BillingCountry from Invoice i join Customer c on c.CustomerId=i.CustomerId  where i.BillingCountry='Brazil'
-------Provide a query that shows the invoices associated with each sales agent. The resultant table should include the Sales Agent's full name. 

Select i.*,concat(e.FirstName,e.LastName)as 'Full Name' from Invoice i join customer c on i.CustomerId=c.CustomerId join Employee e on e.EmployeeId =c.SupportRepId
------ Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers.

Select i.Total as 'Invoice Total',concat(c.FirstName,c.LastName)as 'customer Name',c.Country,concat(e.FirstName,e.LastName)as 'Sales Agent Name' from Invoice i join customer c on i.CustomerId=c.CustomerId join Employee e on e.EmployeeId =c.SupportRepId

-------Provide a query that includes the purchased track name AND artist name with each invoice line item

Select il.*,t.Name as 'Track Name',at.Name as 'Artist Name' from InvoiceLine il inner join Track t on il.TrackId=t.TrackId inner join Album a on a.AlbumId=t.AlbumId inner join Artist at on at.ArtistId=a.ArtistId

------Provide a query that shows the total number of tracks in each playlist. The Playlist name should be include on the resultant table.

Select p.Name,count(pt.TrackId) as 'Total No.of Tracks' from Playlist p left join PlaylistTrack pt on p.PlaylistId=pt.PlaylistId group by p.Name,p.PlaylistId

------Provide a query that shows all the Tracks, but displays no IDs. The resultant table should include the Album name, Media type and Genre.

Select t.Name as 'Track Name',a.Title as 'Album Title',mt.Name as 'Media Type',g.Name as 'Genre',t.Composer,t.Milliseconds,t.Bytes,t.UnitPrice from Track t inner join Album a on a.AlbumId=t.AlbumId inner join MediaType mt on mt.MediaTypeId=t.MediaTypeId inner join Genre g on g.GenreId =t.GenreId

--------Provide a query that shows all Invoices but includes the # of invoice line items. 
Select i.*,count(il.InvoiceId) as 'No of Invoice Line Items' from Invoice i left join InvoiceLine il on il.InvoiceId=i.InvoiceId group by i.InvoiceId,i.CustomerId,i.InvoiceDate,i.BillingState,i.BillingPostalCode,i.BillingCountry,i.BillingCity,i.BillingAddress,i.Total

--------Provide a query that shows total sales made by each sales agent.

Select concat(e.FirstName,e.LastName) as 'Sales Agent',count(i.InvoiceId) as 'Sales' from Employee e  left join Customer c on c.SupportRepId=e.EmployeeId left join Invoice i on i.CustomerId=c.CustomerId group by e.FirstName,e.LastName

--------Provide a query that shows the # of customers assigned to each sales agent. 


Select concat(e.FirstName,e.LastName) as 'Sales Agent',count(c.CustomerId) as 'Sales' from Employee e  left join Customer c on c.SupportRepId=e.EmployeeId group by e.FirstName,e.LastName

--------Provide a query that shows the total sales per country. Which country's customers spent the most?

Select c.Country,Sum(Total)as 'Total sales' from Invoice i join Customer c on c.CustomerId=i.CustomerId group by c.Country

-------Provide a query that shows the most purchased track of 2013. 

 Select t.Name,Count(*)as sales from track t join invoiceline il on il.TrackId=t.TrackId join invoice i on i.InvoiceId=il.InvoiceId where year(i.InvoiceDate)=2013 group by t.Name,t.TrackId order by sales asc

 ------Provide a query that shows the most purchased Media Type. 

Select table2.* from(select DENSE_RANK() Over(Order by count(t.MediaTypeId) Desc) as 'Rank',count(t.MediaTypeId) as TotalPurchased ,mt.Name from Track t join MediaType mt on mt.MediaTypeId=t.MediaTypeId join InvoiceLine il on il.TrackId=t.TrackId join Invoice i on i.InvoiceId=il.InvoiceId group by mt.Name,mt.MediaTypeId)as table2 where table2.Rank <=1

------- Provide a query that shows the top 3 best selling artists.

Select table2.* from(select  DENSE_RANK() Over(Order by count(i.InvoiceId) Desc) as 'Rank',at.Name,count(i.InvoiceId) as TotalSales from Track t join InvoiceLine il on il.TrackId=t.TrackId join Invoice i on i.InvoiceId=il.InvoiceId join Album al on al.AlbumId=t.AlbumId join Artist at on at.ArtistId=al.ArtistId  group by at.Name,at.ArtistId ) as table2 where table2.Rank <=3

-------- Which sales agent made the most in sales over all? 

Select table2.* from( select DENSE_RANK() Over(Order by sum(i.Total) Desc) as 'Rank', concat(e.FirstName,e.LastName) as 'Sales Agent', sum(i.Total) TotalSales from Employee e  join Customer c on e.EmployeeId=c.SupportRepId  join Invoice i on i.CustomerId=c.CustomerId group by e.FirstName,e.LastName,e.EmployeeId) as table2 where table2.Rank <=1

-------- Which sales agent made the most in sales in 2010? 

Select table2.* from( select DENSE_RANK() Over(Order by sum(i.Total) Desc) as 'Rank',concat(e.FirstName,e.LastName) as 'Sales Agent', sum(i.Total) TotalSales from Employee e join Customer c on e.EmployeeId=c.SupportRepId join Invoice i on i.CustomerId=c.CustomerId where year(i.invoiceDate)=2010 group by e.FirstName,e.LastName,e.EmployeeId) as table2 where table2.Rank <=1

-------- Which sales agent made the most in sales in 2009? 

Select table2.* from( select DENSE_RANK() Over(Order by sum(i.Total) Desc) as 'Rank',concat(e.FirstName,e.LastName) as 'Sales Agent', sum(i.Total) TotalSales from Employee e join Customer c on e.EmployeeId=c.SupportRepId join Invoice i on i.CustomerId=c.CustomerId where year(i.invoiceDate)=2009 group by e.FirstName,e.LastName,e.EmployeeId) as table2 where table2.Rank <=1
