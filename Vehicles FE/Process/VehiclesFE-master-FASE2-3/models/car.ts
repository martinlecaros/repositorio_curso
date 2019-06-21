class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }

    // devolverCar(): object {
    //     return {
    //         "Plate": this.plate,
    //         "Brand": this.brand,
    //         "Color": this.color
    //     }
    // }

    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}