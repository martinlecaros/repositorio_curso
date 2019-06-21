// catch clause
var input = '...';
try {
    JSON.parse(input);
}
catch (_a) {
    console.log("Invalid JSON given with " + input);
}
