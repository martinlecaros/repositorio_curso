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
        }
    };
    Propulsores.prototype.frenarPropulsor = function (valor) {
        this.velocidadActual -= valor;
        if (this.velocidadActual < 0) {
            this.velocidadActual = 0;
        }
    };
    return Propulsores;
}());
