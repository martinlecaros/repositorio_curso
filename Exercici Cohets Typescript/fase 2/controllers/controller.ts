function createCohetes(codigo:string,propulsores:number,potenciamax:Array<string>) {
    let cohete = new Cohete(codigo, propulsores,potenciamax);
    
    let output = document.createElement("p");
    let textnode = document.createTextNode(`Rocket: ${cohete.codigo} has ${cohete.propulsores} thrusters and its maximum power is: ${cohete.potenciamax}`);  
    output.setAttribute("class", "rockets");
    output.appendChild(textnode);
    document.body.appendChild(output);
    
};
