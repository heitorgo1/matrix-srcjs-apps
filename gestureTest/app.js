

matrix.init('palm').then(function(data){

  matrix.type("palmLocation").send({ 'x': data.location.x,
                                      'y': data.location.y,
                                      'width': data.location.width,
                                      'height': data.location.height});
  matrix.led('blue').render();
  setTimeout(function() {
  	matrix.led('black').render();
  },2000);
});
