// app code goes here
// matrix.init()....
//
// have fun


// It's working, but error occurs, Channel Closed
matrix.on(function(payload){
    if (typeof payload.value === 'number')
        matrix.type("globalEmitter").send(payload);
    else
        matrix.type("specificEmitter").send(payload);
});


// event emitter
matrix.on('random', function(payload){
    matrix.type("eventEmitter").send({ eventFloat1: payload.randVal[0], eventFloat2: payload.randVal[1] });
});
