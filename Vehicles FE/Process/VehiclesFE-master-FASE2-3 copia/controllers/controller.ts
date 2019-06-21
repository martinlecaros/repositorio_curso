var car: Car;

function getValues (plate:string,brand:string,color:string) {
    debugger
    let values = new Array;
    for(var i=0;i<3;i++){
        let value = (<HTMLInputElement>document.getElementById("input" + i)).value;
        values.push
    }


    let values = [plate, color, brand];

    const PATTERN = new RegExp(/\d{4}[A-Za-z]{3}/);
    let isvalid = PATTERN.test(plate);
    let output = (<HTMLInputElement>document.getElementById("carInfo")).innerText;

    comprobacionCar()

    createCar(plate,brand,color);
 
}

function addWheels() {
    debugger
    const PATTERN_D = new RegExp(/\d+/);
    for(let i = 1; i<=4; i++) {
        
        let diametroStr = (<HTMLInputElement>document.getElementById("inputDiametroRueda"+i)).value;
        let diametroNum = Number(diametroStr);
        let marca = (<HTMLInputElement>document.getElementById("inputMarcaRueda"+i)).value;
        let isvalid = PATTERN_D.test(diametroNum);
        
        if (marca   if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    "0") {
            (<HTM   if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    lementById("wheelsInfo")).innerText = `Complete all fields!`;
        } else if   if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    
            (<HTM   if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    lementById("wheelsInfo")).innerText = `The wheel's diameter must be a number`;
            car.d   if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    
        } else if   if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    etroNum > 2) {
            (<HTM   if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    lementById("wheelsInfo")).innerText = `The wheel's diameter must be in between 0.4 and 2. Sorry...`;
            car.d   if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    
        } else {    if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
    
        car.addWheel(new Wheel(diametroNum, marca));
        }
    }
    (<HTMLInputElement>document.getElementById("wheelsInfo")).innerText = `Wheel 1\nDiameter: ${JSON.stringify(car.wheels[0].diameter)}\nBrand: ${JSON.stringify(car.wheels[0].brand)}\n\nWheel 2\nDiameter: ${JSON.stringify(car.wheels[1].diameter)}\nBrand: ${JSON.stringify(car.wheels[1].brand)}\n\nWheel 3\nDiameter: ${JSON.stringify(car.wheels[2].diameter)}\nBrand: ${JSON.stringify(car.wheels[2].brand)}\n\nWheel 4\nDiameter: ${JSON.stringify(car.wheels[3].diameter)}\nBrand: ${JSON.stringify(car.wheels[3].brand)}`
}

/// FUNCTION CHECK CREATE CAR
function comprobacionCar() {
    const PATTERN = new RegExp(/\d{4}[A-Za-z]{3}/);
    let isvalid = PATTERN.test(plate);
    var output = (<HTMLInputElement>document.getElementById("carInfo")).innerText;

    if (plate.length === 0 || brand.length === 0 || color.length === 0) {
         output = `Complete all fields!`;  
    } else if (isvalid === false) {
        output = `The plate must has 4 numbers follow by 3 letters.`;
    } else {
        createCar(plate,brand,color);
    }  
}

function createCar() {
    car = new Car(plate,color,brand);
    output = `Plate: ${car.plate}\nBrand: ${car.brand}\nColor: ${car.color}`;
}