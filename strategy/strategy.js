var StrategySettings = require('./settings.js');

var regexp = /.*(change|update).*settings/gi;

var execute = function(message) {
    return new StrategySettings().execute(message);
};
var apply = function(message) {
    return new StrategySettings().apply(message);
};

module.exports.execute = execute;
module.exports.apply = apply;