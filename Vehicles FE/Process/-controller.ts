function createCar(plate:string,brand:string,color:string){

    plate = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    color = (<HTMLInputElement>document.getElementById("inputColor")).value;
    brand = (<HTMLInputElement>document.getElementById("inputBrand")).value;
    let car=new Car(plate,color,brand);
    
    if (plate.length === 0 || brand.length === 0 || color.length === 0) {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `The plate must has 4 numbers follow by 3 letters.\n\nPlease, create the car first!!`
    } else {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = 
        `Plate: ${car.plate}\nBrand: ${car.brand}\nColor: ${car.color}`
    }
}
function addWheelsFunction() {
    for(let i = 1; i<=4; i++) {
        let diametroString = (<HTMLInputElement>document.getElementById("inputDiametroRueda"+i)).value;
        let diametroNum = Number(diametroString);
        let marca = (<HTMLInputElement>document.getElementById("inputMarcaRueda"+i)).value;
            
    if (diametroString.length = 0 || marca.length = 0 || isNaN(diametroNum)) {
        (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `Fill in all fields!\nDiameter must be a number!`
    } else if (diametroNum < 0.4 || diametroNum > 2) {
        (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `The wheel's diameter must be in between 0.4 and 2. Sorry...`
    } else { 
        car.addWheel(new Wheel(diametroNum, marca));
    }
    }
    (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText =
    `Wheel 1\nBrand: ${JSON.stringify(car.wheels[0].brand)}\nDiameter: ${JSON.stringify(car.wheels[0].diameter)}\n\nWheel 2\nBrand: ${JSON.stringify(car.wheels[1].brand)}\nDiameter: ${JSON.stringify(car.wheels[1].diameter)}\n\nWheel 3\nBrand: ${JSON.stringify(car.wheels[2].brand)}\nDiameter: ${JSON.stringify(car.wheels[2].diameter)}\n\nWheel 4\nBrand: ${JSON.stringify(car.wheels[3].brand)}\nDiameter: ${JSON.stringify(car.wheels[3].diameter)}`
    }
}
