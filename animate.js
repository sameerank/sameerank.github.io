jQuery(document).ready(function($){

  var documentXArray = [],
      documentYArray = [];

  for (var i = 0; i < $(document).innerWidth(); i++) {
    documentXArray.push(i);
  }

  for (var i = 0; i < $(document).innerHeight(); i++) {
    documentYArray.push(i);
  }

  function randomPlacement(array) {
    var placement = array[Math.floor(Math.random()*array.length)];
    return placement;
  }

  function randomColor () {
    var colors = ['#5DC0DE', '#D9534F', '#BF9752', '#3A87AD', '#5CB75B'];
    var pickedColor = colors[Math.floor(Math.random() * colors.length)];
    return pickedColor;
  }


  var canvas = oCanvas.create({
    canvas: '#canvas',
    background: '#58595B',
    fps: 60
  });


  setInterval(function(){


  var rectangle = canvas.display.ellipse({
    x: randomPlacement(documentXArray),
    y: randomPlacement(documentYArray),
    origin: { x: 'center', y: 'center' },
    radius: 0,
    fill: randomColor(),
    opacity: 1
  });

  canvas.addChild(rectangle);

  rectangle.animate({
    radius: 20,
    opacity: 0
  }, {
    duration: '2000',
    easing: 'linear',
    callback: function () {
  			this.remove();
  		}
  });

}, 50);

  $(window).scroll(function(){
    canvas.width = $('body').innerWidth();
    canvas.height = $('body').innerHeight();
  });

  $(window).scroll();

});
