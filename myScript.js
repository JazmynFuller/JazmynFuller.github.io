function getDimensions() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var browserinfotitle = document.createTextNode("Your inner-Window Dimensions: \n");
    document.getElementById("info-bg-color").style.visibility="visible";
    document.getElementById("browser-info-title").innerHTML = "Your inner-Window Dimensions: \n";
    document.getElementById("browser-info").innerHTML = h+" px high by "+w+" px wide";
    
};

function getNav() {
    var nameOfApp = navigator.appName, productName = navigator.product, appV = navigator.appVersion, userA = navigator.userAgent, platformName = navigator.platform, lang = navigator.language;
    document.getElementById("info-bg-color").style.visibility="visible";
   // document.getElementById("search-Area").style.visibility="hidden";
   // document.getElementById("browser-info").style.textAlign="center";
    document.getElementById("browser-info-title").innerHTML = "Your Navigator Information: \n";
    document.getElementById("browser-info").innerHTML = "Navigator: "+nameOfApp+"<br> Product: "+productName+"<br> App Version: "+appV+"<br> User Agent: "+userA+"<br> Platform: "+platformName+"<br> Language: "+lang+"\n";
};

function getScreen() {
    var screenW = screen.width, screenH = screen.height, screenAW = screen.availWidth, screenAH = screen.availHeight, screenColD = screen.colorDepth, screenPx = screen.pixelDepth;
    document.getElementById("info-bg-color").style.visibility="visible";
    document.getElementById("browser-info-title").innerHTML = "Your Screen Information: \n";
    document.getElementById("browser-info").innerHTML = "Width: "+screenW+"px <br>"+"Height: "+screenH+"px <br>"+"Screen Avail Width: "+screenAW+"px <br>"+"Screen Color Depth: "+screenColD+"px <br>"+"Screen Pixel Depth: "+screenPx+"px <br>";
}

function getLoc() {
    var hrefName = window.location.href, hostName = window.location.hostname, pathName = window.location.pathname, proName = window.location.protocol;
    document.getElementById("info-bg-color").style.visibility="visible";
    document.getElementById("browser-info-title").innerHTML = "Your Location Information: \n";
    document.getElementById("browser-info").innerHTML = "href: "+hrefName+"<br>"+"Host Name: "+hostName+"<br>"+"Path: "+pathName+"<br>"+"Protocol: "+proName;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getGeoLoc);
  } else {
    document.getElementById("browser-info-title").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getGeoLoc(position){
   var lat = position.coords.latitude, lon = position.coords.longitude;
   document.getElementById("info-bg-color").style.visibility="visible";
   //document.getElementById("search-Area").style.visibility="hidden";
   //document.getElementById("browser-info").style.textAlign="center";
   document.getElementById("browser-info-title").innerHTML = "Your Geo-Location Information: \n";
   document.getElementById("browser-info").innerHTML = "Latitude: "+lat+"<br>Longitude: "+lon;
}
    console.log("Test1");
    var check=document.getElementById("txtReader");
    if(!check){
        console.log("Test1");
	addEventListener('change',loadCSVFile);
    }
    
    function loadCSVFile(event) {
	var fileName = event.target.files[0];
	var reader = new FileReader();

	reader.readAsText(fileName);

	reader.onload = function(event) {
	    var rawContent = event.target.result;
	    var formattedText = "";
	    var nameOfFile = document.getElementById("txtReader");
	    
	    var isJSONFile = fileName.name;
	    var isXMLFile = fileName.name;
	    console.log(isXMLFile);
	    var fileType = String(nameOfFile.value), csvSubstring = ".csv", jsonSubstring = ".json", xmlSubstring = ".xml";



	    if(fileType.includes(csvSubstring)) {
			var arrayOfLines = rawContent.match(/[^\r\n]+/g);
			console.log(arrayOfLines);
			for(let i=0; i<arrayOfLines.length;i++) {
				 console.log("This one: "+arrayOfLines[0]);
			     formattedText+=("<p><input id=\"my-check\" name=\"checkThis\" class=\"form-check-input \" type=\"checkbox\" id=\"blankCheckbox\" value=\""+i+"\"> "+arrayOfLines[i]+"</p>");
			     formattedText = formattedText.replace(/,/g, "<br>");
			     // console.log(rawContent);
		        }
		        document.getElementById("browser-info").style.fontSize="28px";
		    
		        document.getElementById("info-bg-color").style.visibility="visible";
		        document.getElementById("browser-info").innerHTML = formattedText;
		        document.getElementById("browser-info").style.textAlign="left";
	    }

	    else if(isJSONFile.includes(jsonSubstring)){
				var result = JSON.parse(event.target.result);    
				var formatted = JSON.stringify(result, null, 2);
				var arrayOfLines = rawContent.match(/[^\r\n]+/g), formattedText ="";
				console.log(arrayOfLines); 
				for(var i=2; i<arrayOfLines.length-2; i++) {
				    formattedText+="<p><input name=\"checkThis\" class=\"form-check-input \" type=\"checkbox\" id=\"blankCheckbox\" value=\""+arrayOfLines[i]+"\"> "+arrayOfLines[i]+"</p>";
				}
				console.log(formattedText);
		
				formattedText=formattedText.replace(/[,]/gm,"<br>");
				formattedText=formattedText.replace(/[{,}]/g,""); 
				console.log(formattedText);
				formattedText = formattedText.replace(/[{^a-z]+:/gm,"");
				console.log(formattedText);
				formattedText = formattedText.replace(/[\"a-z,A-Z,0-9\"]*:/g,"");
				formattedText = formattedText.replace(/["]/gm,"");
				console.log(formattedText);
				console.log(formattedText);
				document.getElementById("browser-info").style.fontSize="28px";
				document.getElementById("info-bg-color").style.visibility="visible";
				document.getElementById("browser-info").style.textAlign="left";
				document.getElementById('browser-info').innerHTML = formattedText;
	    } else if(isXMLFile.includes(xmlSubstring)) {
			console.log("It's XML");
			
			function validateXML(xml) {
			    var parser = new DOMParser();
			    var dom = parser.parseFromString(xml, "text/xml");
			    var validationResult = "";
			    if (dom.documentElement.nodeName == "parsererror") {
	                        validationResult = "Invalid xml!";
	                    }
			    return validationResult;
		}
		var formattedText = "", arrayOfLines = rawContent.match(/[^\r\n]+/g);
		console.log(arrayOfLines);
		for(var i=3; i<arrayOfLines.length-2; i++) {
		    if(String(arrayOfLines[i]).includes("title") && i==3) {
			formattedText+="<p><input name=\"checkThis\" class=\"form-check-input \" type=\"checkbox\" id=\"blankCheckbox\" value=\""+i+"\"> "+arrayOfLines[i]+"<br>";
			continue;
		    } if (String(arrayOfLines[i]).includes("result")){
                        console.log("contains <result>: "+arrayOfLines[i]);
                        continue;
                    } if (!(String(arrayOfLines[i]).includes("title")) && i!=(arrayOfLines.length-3)){
		              formattedText+=arrayOfLines[i]+"<br>";
			      continue;
		    } if (i>3 && i!=(arrayOfLines-3) && String(arrayOfLines[i]).includes("title")) {
			formattedText+="</p><p><input name=\"checkThis\" class=\"form-check-input \" type=\"checkbox\" id=\"blankCheckbox\" value=\""+i+"\"> "+arrayOfLines[i]+"<br>";
			continue;
		    } if (i==(arrayOfLines.length-3)) {
			formattedText+=arrayOfLines[i]+"</p>";
		    } 
		    
		}
		console.log("contains <result>: "+String(arrayOfLines[12]).includes("result"));
		console.log(formattedText);
		formattedText= formattedText.replace(/<title>/gm,"");
		var validationMsg = validateXML(rawContent);
		var xmlDoc = $.parseXML(rawContent), xml = xmlDoc;
		var xmlText = new XMLSerializer().serializeToString(xml);
		
		//console.log(xml);
		//console.log(xmlText);
		document.getElementById("browser-info").innerHTML = formattedText;
		document.getElementById("browser-info").style.fontSize="28px";
		document.getElementById("info-bg-color").style.visibility="visible";
		document.getElementById("browser-info").style.textAlign="left";
	    } else alert("We don't accept those types of files");
	}
    }
		function selectAll() {
		  var items = document.getElementsByName('checkThis');
		    for (var i = 0; i < items.length; i++) {    
		        if (items[i].type == 'checkbox')    
		            items[i].checked = true;    
		    }    
		}

		function deselectAll() {
		  var items = document.getElementsByName('checkThis');
		    for (var i = 0; i < items.length; i++) {    
		        if (items[i].type == 'checkbox')    
		            items[i].checked = false;    
		    }    
		}


$(document).ready(function(){

});
