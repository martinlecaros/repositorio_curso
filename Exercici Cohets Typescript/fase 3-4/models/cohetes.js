var Cohete = /** @class */ (function () {
    function Cohete(codigo, propulsores, potencia) {
        this.codigo = codigo;
        this.propulsores = propulsores;
        this.potencia = potencia;
    }
    return Cohete;
}());
var CoheteFactory = /** @class */ (function () {
    function CoheteFactory() {
    }
    CoheteFactory.prototype.createCohete = function (type) {
        switch (type) {
            case 'cohete1':
                return new Cohete("32WESSDS", 3, [0, 0, 0]);
            case 'cohete2':
                return new Cohete("LDSFJA32", 6, [0, 0, 0, 0, 0, 0]);
        }
    };
    return CoheteFactory;
}());
var coheteFactory = new CoheteFactory();
