var Cohete = /** @class */ (function () {
    function Cohete(codigo) {
        this.propulsores = [];
        this.codigo = codigo;
        this.numeropropulsores = 0;
    }
    Cohete.prototype.acelerarCohete = function (valor) {
        for (var i = 0; i < this.propulsores.length; i++) {
            if (this.propulsores[i].velocidadActual < this.propulsores[i].velocidadMaxima) {
                this.propulsores[i].acelerarPropulsor(valor);
                i = this.propulsores.length;
            }
        }
    };
    Cohete.prototype.frenarCohete = function (valor) {
        for (var i = this.propulsores.length - 1; i >= 0; i--) {
            if (this.propulsores[i].velocidadActual > 0) {
                this.propulsores[i].frenarPropulsor(valor);
                i = -10;
            }
        }
    };
    Cohete.prototype.velocidadActual = function () {
        var velocidad = 0;
        this.propulsores.forEach(function (element) {
            velocidad += element.velocidadActual;
        });
        return velocidad;
    };
    Cohete.prototype.agregarPropulsor = function (codigoPropulsor, velocidadMaximaPropulsor) {
        this.propulsores.push(new Propulsores(codigoPropulsor, velocidadMaximaPropulsor));
        ++this.numeropropulsores;
    };
    return Cohete;
}());
