function crearCotxe(plate:string,brand:string,color:string){
    plate = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    color = (<HTMLInputElement>document.getElementById("inputColor")).value;
    brand = (<HTMLInputElement>document.getElementById("inputBrand")).value;

    let outputCarInfo = (<HTMLInputElement>document.getElementById("carInfo"));
    
    let pattern = new RegExp(/^\d{4}([a-zA-Z]{3})$/);
    let isvalid = pattern.test(plate);
    
    // if (isvalid === true && brand.length > 0 && color.length > 0) {
        
    // } else if (plate.length === 0 && brand.length === 0 && color.length === 0) {
    //     outputCarInfo.innerHTML = `Fill all the fields!!`;
    // } else if (!isvalid) {
    //     outputCarInfo.innerHTML = `The plate must has 4 numbers follow by 3 letters.`;
    // } else {
    //     outputCarInfo.innerHTML = `Fill the remain fields!!`;
    // }

    let car = new Car (plate,color,brand);  
    console.log(`Plate: ${car.plate}\nBrand: ${car.brand}\nColor: ${car.color}`);
    
        let output = document.createElement("p");
        let textnode = document.createTextNode(`Plate: ${car.plate}\nBrand: ${car.brand}\nColor: ${car.color}`);  
        output.setAttribute("class", "res");
        output.appendChild(textnode);
        console.log(output);
        outputCarInfo.appendChild(output);

        

}