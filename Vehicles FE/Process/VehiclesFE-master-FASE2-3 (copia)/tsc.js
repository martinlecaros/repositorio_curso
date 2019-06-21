"use strict";
function createCar(plate, brand, color) {
    var PLATEREG = /^\d{4}([a-zA-Z]{3})$/;
    plate = document.getElementById("inputPlate").value;
    color = document.getElementById("inputColor").value;
    brand = document.getElementById("inputBrand").value;
    var car = new Car(plate, color, brand);
    if (PLATEREG.test(plate) && brand.length > 0 && color.length > 0) {
        document.getElementById("carInfo").innerText =
            "Plate: " + car.plate + "\nBrand: " + car.brand + "\nColor: " + car.color;
    }
    else if (plate === "" || brand === "" || color === "") {
        document.getElementById("carInfo").innerText = "Complete all fields!";
    }
    else {
        document.getElementById("carInfo").innerText = "The plate must has 4 numbers follow by 3 letters.\n\nPlease, create the car first!!";
    }
    document.getElementById("carInfo").innerText =
        "Plate: " + car.plate + "\nBrand: " + car.brand + "\nColor: " + car.color;
    var addWheelsFunction = function () {
        for (var i = 1; i <= 4; i++) {
            var diametroString = document.getElementById("inputDiametroRueda" + i).value;
            var diametroNum = Number(diametroString);
            var marca = document.getElementById("inputMarcaRueda" + i).value;
            if (diametroNum === "" || marca === "" || isNaN(diametroNum)) {
                document.getElementById("wheelsInfo").innerText = "Complete all fields!\nDiameter must be a number!";
            }
            else if (diametroNum < 0.4 || diametroNum > 2) {
                document.getElementById("wheelsInfo").innerText = "The wheel's diameter must be in between 0.4 and 2. Sorry...";
            }
            else {
                car.addWheel(new Wheel(diametroNum, marca));
            }
        }
        document.getElementById("wheelsInfo").innerText =
            "Wheel 1\nBrand: " + JSON.stringify(car.wheels[0].brand) + "\nDiameter: " + JSON.stringify(car.wheels[0].diameter) + "\n\nWheel 2\nBrand: " + JSON.stringify(car.wheels[1].brand) + "\nDiameter: " + JSON.stringify(car.wheels[1].diameter) + "\n\nWheel 3\nBrand: " + JSON.stringify(car.wheels[2].brand) + "\nDiameter: " + JSON.stringify(car.wheels[2].diameter) + "\n\nWheel 4\nBrand: " + JSON.stringify(car.wheels[3].brand) + "\nDiameter: " + JSON.stringify(car.wheels[3].diameter);
    };
    return addWheelsFunction;
}
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    return Car;
}());
var Wheel = /** @class */ (function () {
    function Wheel(diameter, brand) {
        this.diameter = diameter;
        this.brand = brand;
    }
    return Wheel;
}());
