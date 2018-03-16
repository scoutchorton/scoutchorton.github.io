//function tableGen(stylesheet){console.clear();if(!stylesheet){console.log("Using default styles!");}else{console.log("Using custom styling!");}var elements=pAll();var pTableHTML="<style>#periodic-table td {border: 1px solid #00000000; padding: 0px;}</style>";var cElement="";if(document.getElementById("periodic-table")==="TABLE"){console.log("Please create table element with the id \"periodic-table\".");}else{console.log("Periodic table found!");for(var y=1;y<=7;y++){pTableHTML=pTableHTML+"<tr>";for(var x=1;x<=32;x++){if((x<=3)||(x>=18)){pTableHTML=pTableHTML+"<td border=\"none\" onmouseout=\"borderAssign(this, false)\" onmouseover=\"borderAssign(this, true)\" id=\"y"+y+"-x"+x+"\" class=\"y"+y+" x"+x+"\">";for(var i=0;i<Object.keys(elements).length;i++){if((x.toFixed(1).toString()==elements[Object.keys(elements)[i]][4][0])&&(y.toFixed(1).toString()==elements[Object.keys(elements)[i]][4][1])){console.log(elements[Object.keys(elements)[i]][0]+" : "+[x.toString(),y.toString()]);pTableHTML=pTableHTML+Object.keys(elements)[i];}}pTableHTML=pTableHTML+"</td>";}else{console.log("Transition element."+x+", "+y);}}pTableHTML=pTableHTML+"</tr>";}document.getElementById("periodic-table").innerHTML=pTableHTML;}}function borderAssign(element, on){var invisible="#00000000";var rowColor="red";var colColor="blue";var eleColor="orange";var yClass=document.getElementsByClassName(element.className.split(" ")[0]);var xClass=document.getElementsByClassName(element.className.split(" ")[1]);for(var i=0;i<yClass.length;i++){if(on){yClass[i].style.borderTop="1px solid "+rowColor;yClass[i].style.borderBottom="1px solid "+rowColor;}else{yClass[i].style.border="1px solid "+invisible;}}for(var i=0;i<xClass.length;i++){if(on){xClass[i].style.borderLeft="1px solid "+colColor;xClass[i].style.borderRight="1px solid "+colColor;}else{xClass[i].style.border="1px solid "+invisible;}}if(on){element.style.background=eleColor;}else{element.style.background=invisible;}};


//Extended version
function tableGen(hoverOptions) {
	console.clear();
	if(hoverOptions) {
	  if(typeof(hoverOptions) === "object") {
	    for(var i = 0; i < hoverOptions.length; i++) {
	      hoverOptions[i] = hoverOptions[i].toString().replace("\n", "");
	    }
    } else if(typeof(hoverOptions) === "string") {
      hoverOptions = [hoverOptions.toString().replace("\n", ""), ""];
    }
	} else {
	  hoverOptions = ["", ""];
	}
	var elements = pAll();
	var pTableHTML = "<style>#periodic-table td {border: 1px solid #00000000; padding: 0px;} .period {min-width: 20px;} .group {min-height: 25;}</style>";
	var cElement = "";
	if(document.getElementById("periodic-table") === "TABLE") {
		console.log("Please create table element with the id \"periodic-table\".");
	} else {
		//console.log("Periodic table found!");
		for(var y = 1; y <= 7; y++) {
			pTableHTML = pTableHTML + "<tr>";
			for(var x = 1; x <= 32; x++) {
				if((x <= 3) || (x >= 18)) {
					var fail = true;
					for(var i = 0; i < Object.keys(elements).length; i++) {
						if((x.toFixed(1).toString() == elements[Object.keys(elements)[i]][4][0]) && (y.toFixed(1).toString() == elements[Object.keys(elements)[i]][4][1])) {
    					pTableHTML = pTableHTML + "<td border=\"none\" onmouseout=\"borderAssign(this, false);" + hoverOptions[0] + "\" onmouseover=\"borderAssign(this, true);" + hoverOptions[0] + "\" id=\"y" + y  + "-x" + x + "\" class=\"y" + y + " x" + x + " period group\">";
							console.log(elements[Object.keys(elements)[i]][0] + " : " + [x.toString(),y.toString()]);
							pTableHTML = pTableHTML + Object.keys(elements)[i];
							fail = false;
						}
					}
					if(fail) {
					  pTableHTML = pTableHTML + "<td border=\"none\" class=\"period group\" id=\"y" + y  + "-x" + x + "\">";
					  fail = false;
					}
					pTableHTML = pTableHTML + "</td>";
				} else {
					//console.log("Transition element." + x + ", " + y);
				}
			}
			pTableHTML = pTableHTML + "</tr>";
		}
		document.getElementById("periodic-table").innerHTML=pTableHTML;
	}
}

function borderAssign(element, on) {
	var invisible="#00000000";
	var rowColor="red";
	var colColor="blue";
	var eleColor="orange";
	var yClass = document.getElementsByClassName(element.className.split(" ")[0]);
	var xClass = document.getElementsByClassName(element.className.split(" ")[1]);
	for(var i = 0; i < yClass.length; i++) {
		if(on) {
			yClass[i].style.borderTop = "1px solid " + rowColor;
			yClass[i].style.borderBottom = "1px solid "+rowColor;
		} else {
			yClass[i].style.border = "1px solid " + invisible;
		}
	}
	for(var i = 0; i < xClass.length; i++) {
		if(on) {
			xClass[i].style.borderLeft = "1px solid " + colColor;
			xClass[i].style.borderRight = "1px solid " + colColor;
		} else {
			xClass[i].style.border = "1px solid " + invisible;
		}
	}
	if(on) {
		element.style.background = eleColor;
	} else {
		element.style.background=invisible;
	}
}
