"use strict";
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    // devolverCar(): object {
    //     return {
    //         "Plate": this.plate,
    //         "Brand": this.brand,
    //         "Color": this.color
    //     }
    // }
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
function crearCotxe(plate, brand, color) {
    plate = document.getElementById("inputPlate").value;
    color = document.getElementById("inputColor").value;
    brand = document.getElementById("inputBrand").value;
    var outputCarInfo = document.getElementById("carInfo");
    var pattern = new RegExp(/^\d{4}([a-zA-Z]{3})$/);
    var isvalid = pattern.test(plate);
    // if (isvalid === true && brand.length > 0 && color.length > 0) {
    // } else if (plate.length === 0 && brand.length === 0 && color.length === 0) {
    //     outputCarInfo.innerHTML = `Fill all the fields!!`;
    // } else if (!isvalid) {
    //     outputCarInfo.innerHTML = `The plate must has 4 numbers follow by 3 letters.`;
    // } else {
    //     outputCarInfo.innerHTML = `Fill the remain fields!!`;
    // }
    var car = new Car(plate, color, brand);
    console.log("Plate: " + car.plate + "\nBrand: " + car.brand + "\nColor: " + car.color);
    var output = document.createElement("p");
    var textnode = document.createTextNode("Plate: " + car.plate + "\nBrand: " + car.brand + "\nColor: " + car.color);
    output.setAttribute("class", "res");
    output.appendChild(textnode);
    console.log(output);
    outputCarInfo.appendChild(output);
}
