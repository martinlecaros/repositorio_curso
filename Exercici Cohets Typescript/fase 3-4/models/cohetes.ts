class Cohete {
    codigo:string;
    propulsores:number;
    potencia: Array<number>;
    
    constructor(codigo:string,propulsores:number,potencia:Array<number>){
        this.codigo=codigo;
        this.propulsores=propulsores;
        this.potencia=potencia;
    }
}

class CoheteFactory {
    createCohete(type) {
        switch(type) {
            case 'cohete1':
                return new Cohete("32WESSDS", 3, [0,0,0])
            case 'cohete2':
                return new Cohete("LDSFJA32", 6, [0,0,0,0,0,0])
        }
    }
}
const coheteFactory = new CoheteFactory();
