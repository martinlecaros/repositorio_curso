var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var samurai1 = {
    name: 'Samurai1',
    weapon: 'staff'
};
console.log(samurai1);
var vreegKing = {
    size: 250,
    ocean: 'Pacific',
    snout: 'Big'
};
console.log(vreegKing);
// rest 
var snout = vreegKing.snout, vreegQueen = __rest(vreegKing, ["snout"]);
vreegQueen.ocean = 'Atlantic';
console.log(vreegQueen);
// spread
var monsters = __assign({}, vreegKing, vreegQueen);
console.log(monsters);
