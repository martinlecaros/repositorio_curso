CREATE DATABASE  IF NOT EXISTS `optica` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `optica`;
-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: optica
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Clientes`
--

DROP TABLE IF EXISTS `Clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Clientes` (
  `id_clientes` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `direccion_postal` varchar(70) DEFAULT NULL,
  `telefono` varchar(20) NOT NULL,
  `correo_electronico` varchar(70) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `id_referido` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id_clientes`),
  UNIQUE KEY `id_clientes_UNIQUE` (`id_clientes`),
  KEY `fk_Clientes_Clientes1_idx` (`id_referido`),
  CONSTRAINT `fk_Clientes_Clientes1` FOREIGN KEY (`id_referido`) REFERENCES `clientes` (`id_clientes`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clientes`
--

LOCK TABLES `Clientes` WRITE;
/*!40000 ALTER TABLE `Clientes` DISABLE KEYS */;
INSERT INTO `Clientes` VALUES (1,'Cliente 1','Montgat','345927659','cliente1@cliente.es','2019-06-05 00:00:00',NULL),(2,'Cliente 2','Barcelona','453783976','cliente2@cliente.es','2019-06-05 00:00:00',1),(3,'Cliente 3','Badalona','456839087','cliente3@cliente.es','2019-06-05 00:00:00',2),(4,'Cliente 4','Cornelia','345127689','cliente4@cliente.es','2019-06-05 00:00:00',3),(5,'Cliente 5','Sant Cugat','019876530','cliente5@cliente.es','2019-06-05 00:00:00',4);
/*!40000 ALTER TABLE `Clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Empleados`
--

DROP TABLE IF EXISTS `Empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Empleados` (
  `id_empleados` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_empleados`),
  UNIQUE KEY `id_empleados_UNIQUE` (`id_empleados`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empleados`
--

LOCK TABLES `Empleados` WRITE;
/*!40000 ALTER TABLE `Empleados` DISABLE KEYS */;
INSERT INTO `Empleados` VALUES (1,'Empleado 1'),(2,'Empleado 2'),(3,'Empleado 3'),(4,'Empleado 4'),(5,'Empleado 5'),(6,'Empleado 6');
/*!40000 ALTER TABLE `Empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Gafas`
--

DROP TABLE IF EXISTS `Gafas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Gafas` (
  `idProductos` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(50) DEFAULT NULL,
  `precio` int(10) DEFAULT NULL,
  `graduacion_vidrio` int(5) DEFAULT NULL,
  `Montura_id_montura` int(2) unsigned NOT NULL,
  `color` varchar(50) DEFAULT NULL,
  `color_vidrio` varchar(50) DEFAULT NULL,
  `Proveedor_nif` varchar(15) NOT NULL,
  PRIMARY KEY (`idProductos`),
  KEY `fk_Gafas_Proveedor_idx` (`Proveedor_nif`),
  KEY `fk_Gafas_Montura1_idx` (`Montura_id_montura`),
  CONSTRAINT `fk_Gafas_Montura1` FOREIGN KEY (`Montura_id_montura`) REFERENCES `montura` (`id_montura`),
  CONSTRAINT `fk_Gafas_Proveedor` FOREIGN KEY (`Proveedor_nif`) REFERENCES `proveedor` (`nif`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Gafas`
--

LOCK TABLES `Gafas` WRITE;
/*!40000 ALTER TABLE `Gafas` DISABLE KEYS */;
INSERT INTO `Gafas` VALUES (1,'marca1',3000,10,1,'Negro','Opaco','266133077'),(2,'marca2',10000,20,2,'Blanco','Celeste','999555888'),(3,'marca3',50000,30,3,'Azul','Verde','000444888'),(4,'marca4',3000,10,1,'Negro','Opaco','675497308'),(5,'marca5',10000,20,2,'Blanco','Celeste','734976324'),(6,'marca6',50000,30,3,'Azul','Verde','309765429');
/*!40000 ALTER TABLE `Gafas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Montura`
--

DROP TABLE IF EXISTS `Montura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Montura` (
  `id_montura` int(2) unsigned NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_montura`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`),
  UNIQUE KEY `id_montura_UNIQUE` (`id_montura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Montura`
--

LOCK TABLES `Montura` WRITE;
/*!40000 ALTER TABLE `Montura` DISABLE KEYS */;
INSERT INTO `Montura` VALUES (1,'Flotant'),(3,'Metàl·lica'),(2,'Pasta');
/*!40000 ALTER TABLE `Montura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Proveedor`
--

DROP TABLE IF EXISTS `Proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Proveedor` (
  `nif` varchar(15) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `numero` varchar(7) DEFAULT NULL,
  `piso` smallint(3) DEFAULT NULL,
  `puerta` smallint(3) DEFAULT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  `codigo_postal` int(10) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`nif`),
  UNIQUE KEY `nif_UNIQUE` (`nif`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Proveedor`
--

LOCK TABLES `Proveedor` WRITE;
/*!40000 ALTER TABLE `Proveedor` DISABLE KEYS */;
INSERT INTO `Proveedor` VALUES ('000444888','Proveedor3','Diagonal','100',4,3,'Barcelona',8015,'España','400400400','444444444'),('149833472','Proveedor 7','Gran via','300',2,1,'Barcelona',8038,'España','149833472','149833472'),('243479870','Proveedor 5','Muntaner','200',3,2,'Barcelona',8010,'España','243479870','243479870'),('266133077','Proveedor1','Gran via','300',2,1,'Barcelona',8038,'España','600600600','666666666'),('309765429','Proveedor6','Diagonal','100',4,3,'Barcelona',8015,'España','400400400','444444444'),('400400400','Proveedor 3','Diagonal','100',4,3,'Barcelona',8015,'España','400400400','400400400'),('500500500','Proveedor 2','Muntaner','200',3,2,'Barcelona',8010,'España','500500500','500500500'),('570883071','Proveedor 6','Diagonal','100',4,3,'Barcelona',8015,'España','570883071','570883071'),('600600600','Proveedor 1','Gran via','300',2,1,'Barcelona',8038,'España','600600600','600600600'),('625086873','Proveedor 4','Gran via','300',2,1,'Barcelona',8038,'España','625086873','625086873'),('675497308','Proveedor4','Gran via','300',2,1,'Barcelona',8038,'España','600600600','666666666'),('734976324','Proveedor5','Muntaner','200',3,2,'Barcelona',8010,'España','500500500','555555555'),('999555888','Proveedor2','Muntaner','200',3,2,'Barcelona',8010,'España','500500500','555555555');
/*!40000 ALTER TABLE `Proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ventas`
--

DROP TABLE IF EXISTS `Ventas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Ventas` (
  `id_venta` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Gafas_idProductos` int(11) NOT NULL,
  `Empleados_id_empleados` int(10) unsigned NOT NULL,
  `Clientes_id_clientes` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_venta`),
  UNIQUE KEY `id_venta_UNIQUE` (`id_venta`),
  KEY `fk_Ventas_Gafas1_idx` (`Gafas_idProductos`),
  KEY `fk_Ventas_Empleados1_idx` (`Empleados_id_empleados`),
  KEY `fk_Ventas_Clientes1_idx` (`Clientes_id_clientes`),
  CONSTRAINT `fk_Ventas_Clientes1` FOREIGN KEY (`Clientes_id_clientes`) REFERENCES `clientes` (`id_clientes`),
  CONSTRAINT `fk_Ventas_Empleados1` FOREIGN KEY (`Empleados_id_empleados`) REFERENCES `empleados` (`id_empleados`),
  CONSTRAINT `fk_Ventas_Gafas1` FOREIGN KEY (`Gafas_idProductos`) REFERENCES `gafas` (`idProductos`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ventas`
--

LOCK TABLES `Ventas` WRITE;
/*!40000 ALTER TABLE `Ventas` DISABLE KEYS */;
INSERT INTO `Ventas` VALUES (1,1,2,2),(2,2,3,3),(3,3,4,4);
/*!40000 ALTER TABLE `Ventas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-06 23:53:48
