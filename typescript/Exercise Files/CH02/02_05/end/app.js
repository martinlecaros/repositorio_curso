// object type
var warriors = {};
console.log(typeof warriors);
// new.target
var Warrior = /** @class */ (function () {
    function Warrior() {
        var _newTarget = this.constructor;
        console.log(_newTarget);
    }
    return Warrior;
}());
var newWarrior = new Warrior;
