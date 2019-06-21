var Cohete = /** @class */ (function () {
    function Cohete(codigo) {
        this.propulsores = [];
        this.codigo = codigo;
        this.validarCodigo(codigo);
        this.codigoValidado = this.validarCodigo(codigo);
        this.numeropropulsores = 0;
    }
    Cohete.prototype.validarCodigo = function (id) {
        if (id.length >= 8) {
            return id;
        }
        else {
            throw new Error("Ingresa m\u00EDnimo 8 d\u00EDgitos. id: " + id + " es menor.");
        }
    };
    Cohete.prototype.velocidadActual = function () {
        var velocidad = 0;
        for (var i = 0; i < this.propulsores.length; i++) {
            velocidad += this.propulsores[i].velocidadActual;
        }
        return velocidad;
    };
    Cohete.prototype.agregarPropulsor = function (codigoPropulsor, velocidadMaximaPropulsor) {
        this.propulsores.push(new Propulsores(codigoPropulsor, velocidadMaximaPropulsor));
        ++this.numeropropulsores;
    };
    Cohete.prototype.acelerarCohete = function (valor) {
        for (var i = 0; i < this.propulsores.length; i++) {
            if (this.propulsores[i].velocidadActual < this.propulsores[i].velocidadMaxima) {
                this.propulsores[i].acelerarPropulsor(valor);
                i = this.propulsores.length;
            }
        }
    };
    Cohete.prototype.frenarCohete = function (valor) {
        for (var i = this.propulsores.length; i > 0; i--) {
            if (this.propulsores[i].velocidadActual > 0) {
                this.propulsores[i].frenarPropulsor(valor);
                i = 0;
            }
        }
    };
    return Cohete;
}());
