-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema optica
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema optica
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `optica` DEFAULT CHARACTER SET utf8 ;
USE `optica` ;

-- -----------------------------------------------------
-- Table `optica`.`Proveedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Proveedor` (
  `nif` VARCHAR(15) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `calle` VARCHAR(50) NULL,
  `numero` VARCHAR(7) NULL,
  `piso` SMALLINT(3) NULL,
  `puerta` SMALLINT(3) NULL,
  `ciudad` VARCHAR(50) NULL,
  `codigo_postal` INT(10) NULL,
  `pais` VARCHAR(50) NULL,
  `telefono` VARCHAR(20) NULL,
  `fax` VARCHAR(20) NULL,
  PRIMARY KEY (`nif`),
  UNIQUE INDEX `nif_UNIQUE` (`nif` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Montura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Montura` (
  `id_montura` INT(2) UNSIGNED NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE,
  PRIMARY KEY (`id_montura`),
  UNIQUE INDEX `id_montura_UNIQUE` (`id_montura` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Gafas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Gafas` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `marca` VARCHAR(50) NULL,
  `precio` INT(10) NULL,
  `graduacion_vidrio` INT(5) NULL,
  `Montura_id_montura` INT(2) UNSIGNED NOT NULL,
  `color` VARCHAR(50) NULL,
  `color_vidrio` VARCHAR(50) NULL,
  `Proveedor_nif` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idProductos`),
  INDEX `fk_Gafas_Proveedor_idx` (`Proveedor_nif` ASC) VISIBLE,
  INDEX `fk_Gafas_Montura1_idx` (`Montura_id_montura` ASC) VISIBLE,
  CONSTRAINT `fk_Gafas_Proveedor`
    FOREIGN KEY (`Proveedor_nif`)
    REFERENCES `optica`.`Proveedor` (`nif`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Gafas_Montura1`
    FOREIGN KEY (`Montura_id_montura`)
    REFERENCES `optica`.`Montura` (`id_montura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Empleados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Empleados` (
  `id_empleados` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_empleados`),
  UNIQUE INDEX `id_empleados_UNIQUE` (`id_empleados` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Clientes` (
  `id_clientes` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `direccion_postal` VARCHAR(70) NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `correo_electronico` VARCHAR(70) NOT NULL,
  `fecha_registro` DATETIME NOT NULL,
  `id_referido` INT UNSIGNED NULL,
  PRIMARY KEY (`id_clientes`),
  UNIQUE INDEX `id_clientes_UNIQUE` (`id_clientes` ASC) VISIBLE,
  INDEX `fk_Clientes_Clientes1_idx` (`id_referido` ASC) VISIBLE,
  CONSTRAINT `fk_Clientes_Clientes1`
    FOREIGN KEY (`id_referido`)
    REFERENCES `optica`.`Clientes` (`id_clientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Ventas` (
  `id_venta` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Gafas_idProductos` INT NOT NULL,
  `Empleados_id_empleados` INT UNSIGNED NOT NULL,
  `Clientes_id_clientes` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_venta`),
  UNIQUE INDEX `id_venta_UNIQUE` (`id_venta` ASC) VISIBLE,
  INDEX `fk_Ventas_Gafas1_idx` (`Gafas_idProductos` ASC) VISIBLE,
  INDEX `fk_Ventas_Empleados1_idx` (`Empleados_id_empleados` ASC) VISIBLE,
  INDEX `fk_Ventas_Clientes1_idx` (`Clientes_id_clientes` ASC) VISIBLE,
  CONSTRAINT `fk_Ventas_Gafas1`
    FOREIGN KEY (`Gafas_idProductos`)
    REFERENCES `optica`.`Gafas` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ventas_Empleados1`
    FOREIGN KEY (`Empleados_id_empleados`)
    REFERENCES `optica`.`Empleados` (`id_empleados`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ventas_Clientes1`
    FOREIGN KEY (`Clientes_id_clientes`)
    REFERENCES `optica`.`Clientes` (`id_clientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
