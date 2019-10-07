var dependencies = require('./package-lock.json').dependencies;
var list = {};

for (var p of Object.keys(dependencies)) {
    list[p] = dependencies[p].version;
}
console.log(JSON.stringify(list, null, '  '));
