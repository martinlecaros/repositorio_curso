
SELECT * FROM AircraftList;
SELECT * FROM SeatsCode;
SELECT code, capacity, model, id_seats_code, seats_numbers FROM AircraftList 
JOIN SeatsCode ON AircraftList.model=AircraftList_code;

INSERT INTO Aircraft.AircraftList (code, capacity, model) VALUES ("0456","150","LLB7"),("0457","180","XB7"),("0459","190","LB7");

INSERT INTO Aircraft.SeatsCode (AircraftList_code, id_seats_code, seats_numbers) VALUES 
("LLB7","XL","01"),("LLB7","XL","02"),("LLB7","XL","03");
