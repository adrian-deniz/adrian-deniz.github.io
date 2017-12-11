var canvas = document.getElementById("scenery");
context = canvas.getContext("2d");
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

// window.onresize = function (event) {
//   if (window.innerHeight > window.innerWidth) {
//    console.log("You are now in portrait");
//   } else {
// 		location.reload();
//   }
// }
function Coin() {
  this.dimensions = {
    x: width,
    y: Math.round(height/12),
    width: Math.round(width / 14),
    height: Math.round(height / 8)
  };
  this.steps = Math.round(width * 0.8 / 100);
  this.movement = function() {
    if (this.dimensions.x <= this.dimensions.width*-1) {
      context.clearRect(this.dimensions.x, this.dimensions.y, this.dimensions.width, this.dimensions.height);
    }
    else {
      this.dimensions.x -= this.steps;
      context.fillRect(this.dimensions.x, this.dimensions.y, this.dimensions.width, this.dimensions.height);
    }
  };
}

var i = 0;
var coinArray = [];
function coinGenerator() {
  window["coin" + i] = new Coin();
  var x = window["coin" + i];
  coinArray.push(x);
  i++;
  // console.log(coinArray);
}

function coinLoop() {
  coinArray[0].movement();
  if(utils.rectIntersect(character.dimensions, coinArray[0]["dimensions"])) {
    coin0.dimensions.x = coin0.dimensions.width*-1
  }
  if(coinArray[0].dimensions.x < width * 0.5) {
    if(utils.rectIntersect(character.dimensions, coinArray[1]["dimensions"])) {
      coin1.dimensions.x = coin1.dimensions.width*-1
    }
    coinArray[1].movement();
    if(coinArray[1].dimensions.x < width * 0.8) {
      if(utils.rectIntersect(character.dimensions, coinArray[2]["dimensions"])) {
        coin2.dimensions.x = coin2.dimensions.width*-1
      }
      coinArray[2].movement();
      if(coinArray[2].dimensions.x < width * 0.5) {
        if(utils.rectIntersect(character.dimensions, coinArray[3]["dimensions"])) {
          coin3.dimensions.x = coin3.dimensions.width*-1
        }
        coinArray[3].movement();
        if(coinArray[3].dimensions.x < width * 0.9) {
          if(utils.rectIntersect(character.dimensions, coinArray[4]["dimensions"])) {
            coin4.dimensions.x = coin4.dimensions.width*-1
          }
          coinArray[4].movement();
          if(coinArray[4].dimensions.x < width * 0.9) {
            if(utils.rectIntersect(character.dimensions, coinArray[5]["dimensions"])) {
              coin5.dimensions.x = coin5.dimensions.width*-1
            }
            coinArray[5].movement();
            if(coinArray[5].dimensions.x < width * 0.5) {
              if(utils.rectIntersect(character.dimensions, coinArray[6]["dimensions"])) {
                coin6.dimensions.x = coin6.dimensions.width*-1
              }
              coinArray[6].movement();
              if(coinArray[6].dimensions.x < width * 0.9) {
                if(utils.rectIntersect(character.dimensions, coinArray[7]["dimensions"])) {
                  coin7.dimensions.x = coin7.dimensions.width*-1
                }
                coinArray[7].movement();
                if(coinArray[7].dimensions.x < width * 0.8) {
                  if(utils.rectIntersect(character.dimensions, coinArray[8]["dimensions"])) {
                    coin8.dimensions.x = coin8.dimensions.width*-1
                  }
                  coinArray[8].movement();
                  if(coinArray[8].dimensions.x < width * 0.4) {
                    if(utils.rectIntersect(character.dimensions, coinArray[9]["dimensions"])) {
                      coin9.dimensions.x = coin9.dimensions.width*-1
                    }
                    coinArray[9].movement();
                    if(coinArray[9].dimensions.x <= coinArray[9].dimensions.width*-1) {
                      coinArray[0].dimensions.x = width;
                      coinArray[1].dimensions.x = width;
                      coinArray[2].dimensions.x = width;
                      coinArray[3].dimensions.x = width;
                      coinArray[4].dimensions.x = width;
                      coinArray[5].dimensions.x = width;
                      coinArray[6].dimensions.x = width;
                      coinArray[7].dimensions.x = width;
                      coinArray[8].dimensions.x = width;
                      coinArray[9].dimensions.x = width;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

var character = {
  dimensions: {
      // sx: 0,
      x: Math.round(width * 0.3 / 100) * 10,
      y: height - Math.round(height / 2),
      width: Math.round(width / 7),
      height: Math.round(height / 2)
    },
  movement: {
    xMin: Math.round(width * 0.3 / 100) * 10,
    xMax: Math.round(width * 0.3 / 100) * 100,
    steps: Math.round(width * 0.3 / 100),
    cx: 0,
    sx: 0
  },
  sprite: function() {
    if(character.movement.sx == 0) {
      character.movement.sx = 290;
    }
    else {
      character.movement.sx = 0;
    }
  },
  run: function() {
    var imageObj = new Image();
    imageObj.src = "img/stick_figure_run.png";
    if(character.dimensions.x != character.movement.xMax) {
      character.dimensions.x += character.movement.steps;
      character.sprite();
      context.drawImage(imageObj, character.movement.sx, 0, imageObj.width/2, imageObj.height, character.dimensions.x, character.dimensions.y, character.dimensions.width, character.dimensions.height);
    }
    if(character.dimensions.x == character.movement.xMax) {
      character.sprite();
      context.drawImage(imageObj, character.movement.sx, 0, imageObj.width/2, imageObj.height, character.dimensions.x, character.dimensions.y, character.dimensions.width, character.dimensions.height);
    }
  },
  jump: function() {
    character.dimensions.y = Math.round(height/12);
    reset = setTimeout(function () {
      character.dimensions.y = height - Math.round(height / 2);
    },  150);
  }
};

var background = {
  scenery: document.getElementById("scenery"),
  x: 0,
  loop: function() {
    background.scenery.style.backgroundPosition = background.x + "px";
    background.x -= Math.round(width/90);
  }
};

var utils = {
	rangeIntersect: function(min0, max0, min1, max1) {
		return max0 >= min1 && min0 <= max1;
	},
  rectIntersect: function(r0, r1) {
		return utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
			   utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
    },
  collision: function() {
    if(utils.rectIntersect(character.dimensions, window["coin" + i]["dimensions"])) {
      context.fillStyle = "#ff6666";
    }
    else {
      context.fillStyle = "#999999";
    }
  }
};

var touch = document.getElementById("scenery");
touch.addEventListener("touchstart", character.jump, false);

(function loop() {
  context.clearRect(0, 0, width, height);
  background.loop();
  coinGenerator();
  coinLoop();
  character.run();
  setTimeout(loop,42);
})();
