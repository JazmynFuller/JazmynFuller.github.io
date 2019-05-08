console.log("Test")

$(document).ready(function() {
	var dt = new Date();
	document.getElementById("datetime").innerHTML = dt;

	var speed = 0;
	var x = $.ajax({
    url: "https://data.cityofnewyork.us/resource/i4gi-tjb9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "OconBNonoCLdDNrOPYIIBt5UA"
    }
	}).done(function(data) {
  		// alert("Retrieved " + data.length + " records from the dataset!");
  		// console.log(data[0]);
  		// console.log(data);
	});

	var j = $.ajax({
    url: "https://data.cityofnewyork.us/resource/i4gi-tjb9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "OconBNonoCLdDNrOPYIIBt5UA"
    }
	}).done(function(data) {
  		for(var i=0; i<data.length; i++) {
  			speed += Math.round(Number(data[i]["speed"]));
  		}
  		var avg = speed/data.length;
  		svgSpeed(avg);
  		console.log(avg);
	});

	// Brooklyn Speeds 
	var bk = $.ajax({
    url: "https://data.cityofnewyork.us/resource/i4gi-tjb9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "OconBNonoCLdDNrOPYIIBt5UA"
    }
	}).done(function(data) {
		var max = data[0]["speed"];
		var maxLoc = data[0]["link_name"];
		var minLoc = data[0]["link_name"];
		var min = data[0]["speed"];
  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])>max) && (data[i]['borough']=='Brooklyn')) {
  				max = data[i]["speed"];
  				maxLoc = data[i]["link_name"];
  			} else continue;
  		}
  		
  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])<min) && (data[i]['borough']=='Brooklyn') && (Number(data[i]["speed"])!=0)) {
  				min = data[i]["speed"];
  				minLoc = data[i]["link_name"];
  			} else continue;
  		}
  		console.log("Max Speed in Brooklyn: "+max);
  		brooklynSVGmax(max);
  		console.log("Max Speed Location: "+maxLoc);
  		document.getElementById("brooklyn-max").innerHTML = "Location: "+maxLoc+"";
  		console.log("Min Speed in Brooklyn: "+min);
  		brooklynSVGmin(min);
  		console.log("Min Speed Location: "+minLoc);
  		document.getElementById("brooklyn-min").innerHTML = "Location: "+minLoc+"";

	});

	// Queens Speeds 
	var q = $.ajax({
    url: "https://data.cityofnewyork.us/resource/i4gi-tjb9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "OconBNonoCLdDNrOPYIIBt5UA"
    }
	}).done(function(data) {
		var max = data[0]["speed"];
		var maxLoc = data[0]["link_name"];
		var minLoc = data[0]["link_name"];
		var min = data[0]["speed"];
  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])>max) && (data[i]['borough']=='Queens')) {
  				max = data[i]["speed"];
  				maxLoc = data[i]["link_name"];
  			} else continue;
  		}

  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])<min) && (data[i]['borough']=='Queens') && (Number(data[i]["speed"])!=0)) {
  				min = data[i]["speed"];
  				minLoc = data[i]["link_name"];
  			} else continue;
  		}
  		console.log("Max Speed in Queens: "+max);
  		queensSVGmax(max);
  		console.log("Max Speed Location: "+maxLoc);
  		document.getElementById("queens-max").innerHTML = "Location: "+maxLoc+"";
  		console.log("Min Speed in Queens: "+min);
  		queensSVGmin(min);
  		console.log("Min Speed Location: "+minLoc);
  		document.getElementById("queens-min").innerHTML = "Location: "+minLoc+"";
	});

	// Manhattan Speeds 
	var q = $.ajax({
    url: "https://data.cityofnewyork.us/resource/i4gi-tjb9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "OconBNonoCLdDNrOPYIIBt5UA"
    }
	}).done(function(data) {
		var max = data[0]["speed"];
		var maxLoc = data[0]["link_name"];
		var minLoc = data[0]["link_name"];
		var min = data[0]["speed"];
  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])>max) && (data[i]['borough']=='Manhattan')) {
  				max = data[i]["speed"];
  				maxLoc = data[i]["link_name"];
  			} else continue;
  		}

  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])<min) && (data[i]['borough']=='Manhattan') && (Number(data[i]["speed"])!=0)) {
  				min = data[i]["speed"];
  				minLoc = data[i]["link_name"];
  			} else continue;
  		}
  		console.log("Max Speed in Manhattan: "+max);
  		manhattanSVGmax(max);
  		console.log("Max Speed Location: "+maxLoc);
  		document.getElementById("manhattan-max").innerHTML = "Location: "+maxLoc+"";
  		console.log("Min Speed in Manhattan: "+min);
  		manhattanSVGmin(min);
  		console.log("Min Speed Location: "+minLoc);
  		document.getElementById("manhattan-min").innerHTML = "Location: "+minLoc+"";
	});


	// Bronx Speeds 
	var q = $.ajax({
    url: "https://data.cityofnewyork.us/resource/i4gi-tjb9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "OconBNonoCLdDNrOPYIIBt5UA"
    }
	}).done(function(data) {
		var max = data[0]["speed"];
		var maxLoc = data[0]["link_name"];
		var minLoc = data[0]["link_name"];
		var min = data[0]["speed"];
  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])>max) && (data[i]['borough']=='Bronx')) {
  				max = data[i]["speed"];
  				maxLoc = data[i]["link_name"];
  			} else continue;
  		}

  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])<min) && (data[i]['borough']=='Bronx') && (Number(data[i]["speed"])!=0)) {
  				min = data[i]["speed"];
  				minLoc = data[i]["link_name"];
  			} else continue;
  		}
  		console.log("Max Speed in Bronx: "+max);
  		bronxSVGmax(max);
  		console.log("Max Speed Location: "+maxLoc);
  		document.getElementById("bronx-max").innerHTML = "Location: "+maxLoc+"";
  		console.log("Min Speed in Bronx: "+min);
  		bronxSVGmin(min);
  		console.log("Min Speed Location: "+minLoc);
  		document.getElementById("bronx-min").innerHTML = "Location: "+minLoc+"";
	});

	// Staten Island Speeds 
	var q = $.ajax({
    url: "https://data.cityofnewyork.us/resource/i4gi-tjb9.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "OconBNonoCLdDNrOPYIIBt5UA"
    }
	}).done(function(data) {
		var max = data[0]["speed"];
		var maxLoc = data[0]["link_name"];
		var minLoc = data[0]["link_name"];
		var min = data[0]["speed"];
  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])>max) && (data[i]['borough']=='Staten Island')) {
  				max = data[i]["speed"];
  				maxLoc = data[i]["link_name"];
  			} else continue;
  		}

  		for(var i=0; i<data.length; i++) {
  			if((Number(data[i]["speed"])<min) && (data[i]['borough']=='Staten Island') && (Number(data[i]["speed"])!=0)) {
  				min = data[i]["speed"];
  				minLoc = data[i]["link_name"];
  			} else continue;
  		}
  		console.log("Max Speed in Staten Island: "+max);
  		statenSVGmax(max);
  		console.log("Max Speed Location: "+maxLoc);
  		document.getElementById("staten-max").innerHTML = "Location: "+maxLoc+"";
  		console.log("Min Speed in Staten Island: "+min);
  		statenSVGmin(min);
  		console.log("Min Speed Location: "+minLoc);
  		document.getElementById("staten-min").innerHTML = "Location: "+minLoc+"";
	});



	var queensCollege = [-73.816037,40.736340];

	mapboxgl.accessToken = 'pk.eyJ1IjoiamF6bXluZnVsbGVyIiwiYSI6ImNqdmU4YXd2NTAzdHo0NHFwMXE3dm05dmEifQ.FPP-0NTcmT19M-IuGSlFSQ';
        var queensCollege = [-73.816037,40.736340]
        // manipulate your map
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: queensCollege,
            zoom: 15
        });


map.on('load', function(){

    map.addSource('trafficSource', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-traffic-v1'
    });

    
    var buttonEl = document.getElementById('trafficButton');
    buttonEl.addEventListener('click', function(e){
        addTraffic();
    });

});

function addTraffic(){
    var firstPOILabel = map.getStyle().layers.filter(function(obj){ 
        return obj["source-layer"] == "poi_label";
    });

    for(var i = 0; i < trafficLayers.length; i++) {
        map.addLayer(trafficLayers[i], firstPOILabel[0].id);
    }
}

	function svgSpeed(avg) {
		var svg = d3.select("#speedometer")
	                .append("svg:svg")
	                .attr("width", 400)
	                .attr("height", 300);


	        var gauge = iopctrl.arcslider()
	                .radius(120)
	                .events(false)
	                .indicator(iopctrl.defaultGaugeIndicator);
	        gauge.axis().orient("in")
	                .normalize(true)
	                .ticks(12)
	                .tickSubdivide(3)
	                .tickSize(10, 8, 10)
	                .tickPadding(5)
	                .scale(d3.scale.linear()
	                        .domain([0, 160])
	                        .range([-3*Math.PI/4, 3*Math.PI/4]));

	        var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        svg.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        svg.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(avg); // average speed in NYC
	        gauge.value(avg); 
	}


	function brooklynSVGmax(max) {
		var speedometerBrooklyn = d3.select("#speedometer-bk")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
		var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerBrooklyn.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerBrooklyn.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(max); // average speed in NYC
	        gauge.value(max); 
	}

	function brooklynSVGmin(min) {
		var speedometerBrooklynMin = d3.select("#speedometer-bkmin")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
			var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerBrooklynMin.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerBrooklynMin.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(min); // average speed in NYC
	        gauge.value(min); 
		
	}

	function queensSVGmax(max) {
		var speedometerQueens = d3.select("#speedometer-q")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
		var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerQueens.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerQueens.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(max); // average speed in NYC
	        gauge.value(max); 
	}

	function queensSVGmin(min) {
		var speedometerQueensMin = d3.select("#speedometer-qmin")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
			var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerQueensMin.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerQueensMin.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(min); // average speed in NYC
	        gauge.value(min); 
	}

	function manhattanSVGmax(max) {
		var speedometerManhattan = d3.select("#speedometer-m")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
		var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerManhattan.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerManhattan.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(max); // average speed in NYC
	        gauge.value(max); 
	}

	function manhattanSVGmin(min) {
		var speedometerManhattanMin = d3.select("#speedometer-mmin")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
			var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerManhattanMin.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerManhattanMin.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(min); // average speed in NYC
	        gauge.value(min); 
	}
	
	function bronxSVGmax(max) {
		var speedometerBronx = d3.select("#speedometer-b")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
		var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerBronx.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerBronx.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(max); // average speed in NYC
	        gauge.value(max); 
	}

	function bronxSVGmin(min) {
		var speedometerBronxMin = d3.select("#speedometer-bmin")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
			var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerBronxMin.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerBronxMin.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(min); // average speed in NYC
	        gauge.value(min); 
	}

	function statenSVGmax(max) {
		var speedometerStaten = d3.select("#speedometer-s")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
		var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerStaten.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerStaten.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(max); // average speed in NYC
	        gauge.value(max); 
	}

	function statenSVGmin(min) {
		var speedometerStatenMin = d3.select("#speedometer-smin")
								.append("svg:svg")
								.attr("width",400)
								.attr("height",300);
			var gauge = iopctrl.arcslider()
					 		.radius(120)
					 		.events(false)
					 		.indicator(iopctrl.defaultGaugeIndicator);
			gauge.axis().orient("in")
				  .normalize(true)
				  .ticks(12)
				  .tickSubdivide(3)
				  .tickSize(10, 8, 10)
	              .tickPadding(5)
	              .scale(d3.scale.linear()
	              .domain([0, 160])
	              .range([-3*Math.PI/4, 3*Math.PI/4]));
	      	var segDisplay = iopctrl.segdisplay()
	                .width(80)
	                .digitCount(6)
	                .negative(false)
	                .decimals(0);

	        speedometerStatenMin.append("g")
	                .attr("class", "segdisplay")
	                .attr("transform", "translate(130, 200)")
	                .call(segDisplay);

	        speedometerStatenMin.append("g")
	                .attr("class", "gauge")
	                .call(gauge);

	        segDisplay.value(min); // average speed in NYC
	        gauge.value(min); 
	}



	

});


