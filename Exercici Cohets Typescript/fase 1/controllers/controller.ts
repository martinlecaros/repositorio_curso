function createCohetes(codigo:string,propulsores:number) {
    let cohete = new Cohete(codigo, propulsores);
    
    let output = document.createElement("p");
    let textnode = document.createTextNode(`Rocket: ${cohete.codigo} has ${cohete.propulsores} thrusters.`);  
    output.setAttribute("class", "rockets");
    output.appendChild(textnode);
    document.body.appendChild(output);

};
