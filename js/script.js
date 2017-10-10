var sxCoordinate = 0;
var key = [false, false, false];
var t = 0;
var cxCoordinate = 0;

var canvas = document.getElementById("scenery");
context = canvas.getContext("2d");
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;
canvas.style.backgroundPosition = cxCoordinate + "px";

var xMin= Math.round(width * 0.5 / 100) * 10;
var xMax = Math.round(width * 0.5 / 100) * 100;
var steps = Math.round(width * 0.5 / 100);

console.log(Math.round(width * 0.5 / 100) * 10);
console.log(Math.round(width * 0.5 / 100) * 100);
console.log(Math.round(width * 0.5 / 100));
console.log(Math.round(height / 2));
console.log(Math.round(width / 7));

function myFunction() {
  t = 1;
  console.log(t);
  context.clearRect(0, 0, width, height);
  runImage();
  rect1.y = 0;
  context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
  if(utils.rectIntersect(rect0, rect1)) {
    context.fillStyle = "#ff6666";
  }
  else {
    context.fillStyle = "#999999";
  }
  context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
  jump = setTimeout(function () {
    context.clearRect(0, 0, width, height);
    rect1.y = height - Math.round(height / 2);
    context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
    if(utils.rectIntersect(rect0, rect1)) {
      context.fillStyle = "#ff6666";
    }
    else {
      context.fillStyle = "#999999";
    }
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
  }, 150);
}

var rect1 = {
      x: xMin,
      y: height - Math.round(height / 2), // universal y position
      width: Math.round(width / 7),
      height: Math.round(height / 2)
};

var imageObj = new Image();
imageObj.src = "img/stick_figure_run.png";
imageObj.onload = function() {
   context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
 }

var rect0 = {
			x: width / 3,
			y: height - 100, // universal y position
			width: 200,
			height: 100
		};
context.fillStyle = "#999999";
context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);

function keyDown(e) {

  if(e.keyCode == 39) {key[0] = true};
  if(e.keyCode == 37) {key[1] = true};
  if(e.keyCode == 32) {key[2] = true};
}


function keyUp(e) {
  if(e.keyCode == 39) {key[0] = false};
  if(e.keyCode == 37) {key[1] = false};
  if(e.keyCode == 32) {key[2] = false; t = 0;};
}

function runImage() {
  if(sxCoordinate == 0) {
    sxCoordinate = 290;
  }
  else {
    sxCoordinate = 0;
  }
}

(function loop() {
  if(key[0] && rect1.x != xMax) {
    cxCoordinate -= Math.round(width/48);
    canvas.style.backgroundPosition = cxCoordinate + "px";
    context.clearRect(0, 0, width, height);
    runImage();
    rect1.x += steps;
    console.log(rect1.x);
    context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
    if(utils.rectIntersect(rect0, rect1)) {
			context.fillStyle = "#ff6666";
		}
		else {
			context.fillStyle = "#999999";
		}
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
  }
  if (key[0] && rect1.x == xMax){
    cxCoordinate -= Math.round(width/48);
    canvas.style.backgroundPosition = cxCoordinate + "px";
    context.clearRect(0, 0, width, height);
    runImage();
    context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
    if(utils.rectIntersect(rect0, rect1)) {
			context.fillStyle = "#ff6666";
		}
		else {
			context.fillStyle = "#999999";
		}
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
  }

  if(key[1] && rect1.x != xMin) {
    cxCoordinate += Math.round(width/48);
    canvas.style.backgroundPosition = cxCoordinate + "px";
    context.clearRect(0, 0, width, height);
    runImage();
    rect1.x -= steps;
    console.log(rect1.x);
    context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
    if(utils.rectIntersect(rect0, rect1)) {
			context.fillStyle = "#ff6666";
		}
		else {
			context.fillStyle = "#999999";
		}
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
  }

  if(key[1] && rect1.x == xMin) {
    cxCoordinate += Math.round(width/48);
    canvas.style.backgroundPosition = cxCoordinate + "px";
    context.clearRect(0, 0, width, height);
    runImage();
    context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
    if(utils.rectIntersect(rect0, rect1)) {
			context.fillStyle = "#ff6666";
		}
		else {
			context.fillStyle = "#999999";
		}
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
  }

  if(key[2] && t == 0) {
    t = 1;
    console.log(t);
    context.clearRect(0, 0, width, height);
    runImage();
    rect1.y = 0;
    context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
    if(utils.rectIntersect(rect0, rect1)) {
      context.fillStyle = "#ff6666";
    }
    else {
      context.fillStyle = "#999999";
    }
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
    jump = setTimeout(function () {
      context.clearRect(0, 0, width, height);
      rect1.y = height - Math.round(height / 2);
      context.drawImage(imageObj, sxCoordinate, 0, 288, 557, rect1.x, rect1.y, rect1.width, rect1.height);
      if(utils.rectIntersect(rect0, rect1)) {
  			context.fillStyle = "#ff6666";
  		}
  		else {
  			context.fillStyle = "#999999";
  		}
      context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
    }, 150);


  }
  setTimeout(loop,42);
})();

var utils = {
	rangeIntersect: function(min0, max0, min1, max1) {
		return max0 >= min1 && min0 <= max1;
	},

	rectIntersect: function(r0, r1) {
		return utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
			   utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);

	}

}
document.onkeydown = keyDown;
document.onkeyup = keyUp;
