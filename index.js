(function(exports){

	function area(polygon) {

		var area = 0;
		var j = polygon.length - 1;
		var p1;
		var p2;

		for(var k = 0; k < polygon.length; j = k++) {
			p1 = polygon[k];
			p2 = polygon[j];

			area += p1[0]*p2[1];
			area -= p1[1]*p2[0];
		}

		area = area / 2;

		return area;
	}

	 exports.center = function(polygon){

		 var x = 0;
		 var y = 0;
		 var f;
		 var j = polygon.length-1;
		 var p1;
		 var p2;

		 for(var k = 0; k < polygon.length; j=k++) {
		 p1 = polygon[k];
		 p2 = polygon[j];

		 f = p1[0]*p2[1]-p2[0]*p1[1];

		 x += (p1[0]+p2[0])*f;
		 y += (p1[1]+p2[1])*f;

		 }

		 f = area(polygon)*6;

		 return [x/f, y/f];
	 };

 })(typeof exports === 'undefined'? this['polygon_center']={}: exports);
