

matrix.on(function(payload){
    var type = payload.type ? payload.type : '';

    if (type === 'app-message') {
        var randValNumber = (typeof payload.randVal !== 'undefined') ? payload.randVal : payload.payload.randVal;
        if (typeof randValNumber === 'number')
            matrix.type("globalEmitter").send({globalValue: randValNumber});
    } else if (type === 'app-crosstalkConsumerTest-message') {
        var randValString = (typeof payload.randVal !== 'undefined') ? payload.randVal : payload.payload.randVal;
        if (typeof randValString === 'string')
            matrix.type("specificEmitter").send({ specificValue: randValString});
    }

});

// event emitter
matrix.on('random', function(payload){
    matrix.type("eventEmitter").send({ eventFloat1: payload.randVal[0], eventFloat2: payload.randVal[1] });
});
