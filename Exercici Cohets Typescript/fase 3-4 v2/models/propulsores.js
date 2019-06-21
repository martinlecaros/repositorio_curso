var Propulsores = /** @class */ (function () {
    function Propulsores(codigo, velocidadMaxima) {
        this.velocidadActual = 0;
        this.codigo = codigo;
        this.velocidadMaxima = velocidadMaxima;
    }
    Propulsores.prototype.acelerarPropulsor = function (valor) {
        this.velocidadActual += valor;
        if (this.velocidadActual > this.velocidadMaxima) {
            this.velocidadActual = this.velocidadMaxima;
            alert("El propulsor est\u00E1 en su m\u00E1xima potencia: " + this.velocidadMaxima);
        }
    };
    Propulsores.prototype.frenarPropulsor = function (valor) {
        this.velocidadActual -= valor;
        if (this.velocidadActual < 0) {
            this.velocidadActual = 0;
            alert("El propulsor est\u00E1 detenido a: " + this.velocidadActual);
        }
    };
    return Propulsores;
}());
