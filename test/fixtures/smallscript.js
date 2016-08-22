var rx = /test[[\]]/;
var rx = /test[[\]]/i;

var a = 'res:Test', b = "res:Tasty\"", c = "Do not escape";

// Testing resolution of / both as a divide and as a regex literal start.
var txt = Math.round(calibration * 100) / 100 + 'res:somestring with a /';

var i = 10;
for(i = 0; i < 100; i++) {
	i = 10 / 10;
}

