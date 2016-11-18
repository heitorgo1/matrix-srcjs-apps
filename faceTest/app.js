// app code goes here
// matrix.init()....
//
// have fun
matrix.led('red').render();

matrix.init('face', {}).then(function(data){
  matrix.type("faceLocation").send( { 'x': data.location.x, 
                                      'y' : data.location.y, 
                                      'width': data.location.width,
                                      'height': data.location.height } );
  matrix.led('green').render();
  setTimeout(function() {
  	matrix.led('black').render();
  },2000);
});
