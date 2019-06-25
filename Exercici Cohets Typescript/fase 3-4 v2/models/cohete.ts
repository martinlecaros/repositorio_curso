class Cohete {
    codigo: string;
    numeropropulsores: number;
    propulsores: Propulsores[] = [];
    
    constructor(codigo: string){
        this.codigo = codigo;
        this.numeropropulsores = 0;
    }

    acelerarCohete(valor: number) {
        for (let i = 0; i < this.propulsores.length; i++) {
            if (this.propulsores[i].velocidadActual < this.propulsores[i].velocidadMaxima) {
                this.propulsores[i].acelerarPropulsor(valor);
                i = this.propulsores.length;
            }
        }
    }

    frenarCohete(valor: number) {
        
        for (let i = this.propulsores.length-1; i >= 0; i--) {
            if (this.propulsores[i].velocidadActual > 0) {                
                this.propulsores[i].frenarPropulsor(valor);
                i = -10;
            }
        }
    }
    
    velocidadActual() {
        let velocidad = 0;
        this.propulsores.forEach(element => {
            velocidad += element.velocidadActual;
        });
        return velocidad; 
    }
    
    agregarPropulsor(codigoPropulsor: string, velocidadMaximaPropulsor: number) {
        this.propulsores.push(new Propulsores(codigoPropulsor, velocidadMaximaPropulsor));
        ++this.numeropropulsores;
    }
}
