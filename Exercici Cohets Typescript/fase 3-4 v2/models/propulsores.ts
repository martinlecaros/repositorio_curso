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
            alert(`El propulsor está en su máxima potencia: ${this.velocidadMaxima}`);
        }
    }

    frenarPropulsor(valor: number) {
        this.velocidadActual -= valor;
        if(this.velocidadActual < 0) {
            this.velocidadActual = 0;
            alert(`El propulsor está detenido a: ${this.velocidadActual}`);
        }
    }
}