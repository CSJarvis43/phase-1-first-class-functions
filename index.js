function receivesAFunction (cb) {
    return cb();
}

const returnsANamedFunction = function namedFunction() {
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}