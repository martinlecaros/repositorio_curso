// iterators
var warriors = ['Samurai', 'Archer', 'Magician'];
// values in the array
for (var _i = 0, warriors_1 = warriors; _i < warriors_1.length; _i++) {
    var warrior = warriors_1[_i];
    console.log(warrior);
}
// provide keys in the array
for (var warrior in warriors) {
    console.log(warrior);
}
