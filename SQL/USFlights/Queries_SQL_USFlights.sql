/* 
1.Quantitat de registres de la taula de vols:*/
SELECT COUNT(flightID) FROM Flights;

/* 
2.Retard promig de sortida i arribada segons l’aeroport origen.*/
SELECT Flights.Origin, AVG(Flights.ArrDelay) as prom_arribades, AVG(Flights.DepDelay) as prom_sortides
FROM USAirlineFlights2.Flights GROUP BY Flights.Origin ORDER BY Flights.Origin ASC;

/* 
3.Retard promig d’arribada dels vols, per mesos i segons l’aeroport origen. 
A més, volen que els resultat es mostrin de la següent forma (fixa’t en l’ordre de les files):*/
SELECT Flights.Origin as ORIGEN, Flights.colYear as AÑO, Flights.colMonth as MES, FORMAT(Flights.ArrDelay, 4) as PROMEDIO_LLEGADAS
FROM USAirlineFlights2.Flights ORDER BY Flights.Origin, Flights.colYear ASC;

/* 
4.Retard promig d’arribada dels vols, per mesos i segons l’aeroport origen (mateixa consulta que 
abans i amb el mateix ordre). Però a més, ara volen que en comptes del codi de l’aeroport 
es mostri el nom de la ciutat.*/
SELECT USAirports.City, Flights.colYear as AÑO, Flights.colMonth as MES, FORMAT(Flights.ArrDelay, 4) as PROMEDIO_LLEGADAS
FROM USAirlineFlights2.Flights 
JOIN USAirlineFlights2.USAirports ON Flights.Origin=USAirports.IATA
ORDER BY USAirports.City, Flights.colYear ASC;

/* 
5.Les companyies amb més vols cancelats,per mesos i any. A més, han d’estar ordenades de forma que 
les companyies amb més cancel·lacions apareguin les primeres.*/
SELECT Flights.UniqueCarrier, Flights.colYear as AÑO, Flights.colMonth as MES, 
FORMAT(Flights.ArrDelay, 4) as PROMEDIO_LLEGADAS, Flights.Cancelled as total_cancelled
FROM USAirlineFlights2.Flights GROUP BY Flights.colMonth, Flights.colYear 
ORDER BY Flights.Cancelled ASC;


SELECT * FROM USAirlineFlights2.Flights;
