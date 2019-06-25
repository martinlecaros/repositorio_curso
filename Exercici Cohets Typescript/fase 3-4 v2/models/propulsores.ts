class Propulsores {
    codigo: string;
    velocidadActual: number = 0;
    velocidadMaxima: number;

    constructor(codigo: string, velocidadMaxima: number) {
        this.codigo = codigo;
        this.velocidadMaxima = velocidadMaxima;
    }

    acelerarPropulsor(valor: number) {
        this.velocidadActual += valor;
        if(this.velocidadActual > this.velocidadMaxima) {
            this.velocidadActual = this.velocidadMaxima;
        }
    }

    frenarPropulsor(valor: number) {
        this.velocidadActual -= valor;
        if(this.velocidadActual < 0) {
            this.velocidadActual = 0;
        }
    }
}