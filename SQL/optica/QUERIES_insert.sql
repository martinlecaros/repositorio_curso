INSERT INTO optica.Montura (id_montura, nombre) VALUES 
("1", "Flotant"),("2", "Pasta"),("3", "Metàl·lica");

INSERT INTO optica.Proveedor 
(nif, nombre, calle, numero, piso, puerta, ciudad, codigo_postal, pais, telefono, fax) VALUES 
("600600600", "Proveedor 1", "Gran via", "300", "2", "1", "Barcelona", "08038", "España", "600600600", "600600600"),
("500500500", "Proveedor 2", "Muntaner", "200", "3", "2", "Barcelona", "08010", "España", "500500500", "500500500"),
("400400400", "Proveedor 3", "Diagonal", "100", "4", "3", "Barcelona", "08015", "España", "400400400", "400400400"),
("625086873", "Proveedor 4", "Gran via", "300", "2", "1", "Barcelona", "08038", "España", "625086873", "625086873"),
("243479870", "Proveedor 5", "Muntaner", "200", "3", "2", "Barcelona", "08010", "España", "243479870", "243479870"),
("570883071", "Proveedor 6", "Diagonal", "100", "4", "3", "Barcelona", "08015", "España", "570883071", "570883071"),
("149833472", "Proveedor 7", "Gran via", "300", "2", "1", "Barcelona", "08038", "España", "149833472", "149833472");


INSERT INTO optica.Empleados (nombre) VALUES 
("Empleado 1"),("Empleado 2"),("Empleado 3"),("Empleado 4"),("Empleado 5"),("Empleado 6");

INSERT INTO optica.Clientes (nombre, direccion_postal, telefono, correo_electronico, fecha_registro) VALUES 
("Cliente 1","Montgat","345927659","cliente1@cliente.es","2019-06-05");

INSERT INTO optica.Clientes (nombre, direccion_postal, telefono, correo_electronico, fecha_registro, id_referido) VALUES 
("Cliente 2","Barcelona","453783976","cliente2@cliente.es","2019-06-05","1"),
("Cliente 3","Badalona","456839087","cliente3@cliente.es","2019-06-05","2"),
("Cliente 4","Cornelia","345127689","cliente4@cliente.es","2019-06-05","3"),
("Cliente 5","Sant Cugat","019876530","cliente5@cliente.es","2019-06-05","4");

INSERT INTO optica.Proveedor 
(nif, nombre, calle, numero, piso, puerta, ciudad, codigo_postal, pais, telefono, fax) VALUES 
("266133077", "Proveedor1", "Gran via", "300", "2", "1", "Barcelona", "08038", "España", "600600600", "666666666"),
("999555888", "Proveedor2", "Muntaner", "200", "3", "2", "Barcelona", "08010", "España", "500500500", "555555555"),
("000444888", "Proveedor3", "Diagonal", "100", "4", "3", "Barcelona", "08015", "España", "400400400", "444444444"),
("675497308", "Proveedor4", "Gran via", "300", "2", "1", "Barcelona", "08038", "España", "600600600", "666666666"),
("734976324", "Proveedor5", "Muntaner", "200", "3", "2", "Barcelona", "08010", "España", "500500500", "555555555"),
("309765429", "Proveedor6", "Diagonal", "100", "4", "3", "Barcelona", "08015", "España", "400400400", "444444444");

INSERT INTO optica.Gafas (marca, precio, graduacion_vidrio, Montura_id_montura, color, color_vidrio, Proveedor_nif) VALUES 
("marca1", "3000", "10", "1", "Negro", "Opaco", "266133077"),
("marca2", "10000", "20", "2", "Blanco", "Celeste", "999555888"),
("marca3", "50000", "30", "3", "Azul", "Verde", "000444888"),
("marca4", "3000", "10", "1", "Negro", "Opaco", "675497308"),
("marca5", "10000", "20", "2", "Blanco", "Celeste", "734976324"),
("marca6", "50000", "30", "3", "Azul", "Verde", "309765429");

INSERT INTO optica.Ventas (Gafas_idProductos, Empleados_id_empleados, Clientes_id_clientes) 
VALUES ("1","2","2"),("2","3","3"),("3","4","4");