class Cohete {
    codigo: string;
    codigoValidado: string;
    numeropropulsores: number;
    propulsores: Propulsores[] = [];
    
    constructor(codigo: string){
        this.codigo = codigo;
        this.validarCodigo(codigo);
        this.codigoValidado = this.validarCodigo(codigo);
        this.numeropropulsores = 0;
    }

    validarCodigo(id: string) {
        if(id.length>=8) {
            return id;
        } else {
            throw new Error(`Ingresa mínimo 8 dígitos. id: ${id} es menor.`);
        }
    }

    velocidadActual() {
        let velocidad = 0;
        for (let i = 0; i < this.propulsores.length; i++) {
            velocidad += this.propulsores[i].velocidadActual;
        }
        return velocidad; 
    }
    
    agregarPropulsor(codigoPropulsor: string, velocidadMaximaPropulsor: number) {
        this.propulsores.push(new Propulsores(codigoPropulsor, velocidadMaximaPropulsor));
        ++this.numeropropulsores;
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
        for (let i = this.propulsores.length; i > 0; i--) {
            if (this.propulsores[i].velocidadActual > 0) {                
                this.propulsores[i].frenarPropulsor(valor);
                i = 0;
            }
        }
    }

}
