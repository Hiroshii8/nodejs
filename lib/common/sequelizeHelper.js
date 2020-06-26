const _ = require('lodash');

function mapValues() {
    var args;
    if (arguments[0] instanceof Array) {
        args = arguments[0];
    } else {
        args = [].slice.call(arguments);
    }

    return function (collection) {
        if (collection instanceof Array) {
            return collection.map(function (item) {
                return mapValues(args)(item);
            });
        } else {
            return _.pick(collection, args);
        }
    };
};

module.exports = {
    mapValues
}
