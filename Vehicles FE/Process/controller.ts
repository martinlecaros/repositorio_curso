function createCar(plate:string,brand:string,color:string){
    plate = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    color = (<HTMLInputElement>document.getElementById("inputColor")).value;
    brand = (<HTMLInputElement>document.getElementById("inputBrand")).value;

    const pattern = new RegExp(/\d{4}[A-Za-z]{3}/);
    let isvalid = pattern.test(plate);
    console.log(isvalid)
    
    if (isvalid === true || brand.length > 0 || color.length > 0) {

        let car = new Car(plate,color,brand);
    
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `Plate: ${car.plate}\nBrand: ${car.brand}\nColor: ${car.color}`;
    } else if (plate.length === 0 || brand.length === 0 || color.length === 0) {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `Complete all fields!`;   
    } else if (!isvalid) {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        (<HTMLInputElement>document.getElementById("carInfo")).innerText = `Please, create the car first!!`;
    }
    console.log(car);
    console.log("up create car");

    let addWheelsFunction = function() {
    
        for(let i = 1; i<=4; i++) {
            let diametro = (<HTMLInputElement>document.getElementById("inputDiametroRueda"+i)).value;
            let diametroNum = Number(diametro);
            let marca = (<HTMLInputElement>document.getElementById("inputMarcaRueda"+i)).value;

            if (!isNaN(diametroNum) || marca === "") {
                (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `Complete all fields!\nDiameter must be a number!`;
            } else if (diametroNum < 0.4 || diametroNum > 2) {
                (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `The wheel's diameter must be in between 0.4 and 2. Sorry...`;
            } else { 
            car.addWheel(new Wheel(diametroNum, marca));
            }
        }
        (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `Wheel 1\nDiameter: ${JSON.stringify(car.wheels[0].diameter)}\nBrand: ${JSON.stringify(car.wheels[0].brand)}\n\nWheel 2\nDiameter: ${JSON.stringify(car.wheels[1].diameter)}\nBrand: ${JSON.stringify(car.wheels[1].brand)}\n\nWheel 3\nDiameter: ${JSON.stringify(car.wheels[2].diameter)}\nBrand: ${JSON.stringify(car.wheels[2].brand)}\n\nWheel 4\nDiameter: ${JSON.stringify(car.wheels[3].diameter)}\nBrand: ${JSON.stringify(car.wheels[3].brand)}`
        
    }
    return addWheelsFunction;
}
