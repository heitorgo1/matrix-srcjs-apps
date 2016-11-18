// app code goes here
// matrix.init()....
//
// have fun



// Global Emission
setInterval(function() {
    var randomValue = Math.floor(Math.random()*100);
    matrix.emit({ randVal: randomValue});
    matrix.type("globalEmitter").send({ globalValue: randomValue });
}, 1000);


//App Specific Emission
setInterval(function(){
    var randomChar = String.fromCharCode(97+Math.floor(Math.random()*26));
    matrix.emit('crosstalkConsumerTest', { randVal: randomChar});
    matrix.type("specificEmitter").send({ specificValue: randomChar});
}, 1500);

// Event Emission
setInterval(function(){
    var randFloat1 = Math.random()*100;
    var randFloat2 = Math.random()*100;
    matrix.emit('crosstalkConsumerTest', 'random' ,{ randVal: [randFloat1, randFloat2]});
    matrix.type("eventEmitter").send({ eventFloat1: randFloat1, eventFloat2: randFloat2 });
}, 1500);