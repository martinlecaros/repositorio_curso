SELECT * FROM optica.Proveedor;
SELECT * FROM optica.Clientes;
SELECT * FROM optica.Gafas;
SELECT Gafas.marca, Montura.nombre, Gafas.color, Proveedor.nif, Proveedor.nombre  FROM optica.Gafas 
JOIN optica.Montura ON Montura_id_montura=id_montura  
JOIN optica.Proveedor ON Proveedor_nif=nif
WHERE idProductos="1";

SELECT * FROM optica.Ventas;

SELECT Ventas.id_venta, Gafas.marca, Gafas.precio, Empleados.nombre, Clientes.nombre  FROM optica.Ventas 
JOIN optica.Gafas ON Gafas_idProductos=idProductos  
JOIN optica.Clientes ON Clientes_id_clientes=id_clientes  
JOIN optica.Empleados ON Empleados_id_empleados=id_empleados
WHERE id_venta="1";
