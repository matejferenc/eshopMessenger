function StrategySettings(){
}

var regexp = /.*(change|update).*settings/gi;

StrategySettings.prototype = {
    execute: function() {
        return "updating settings...";
    },
    apply: function(message) {
        if (!message.text) {
            return false;
        }
        return message.text.match(regexp) != null;
    }
}
module.exports = StrategySettings;