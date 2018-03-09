function getPhrase() {
  console.clear();
  var elemPhrase = [];
  var elems = pSymbolLength();
  var phrase = document.getElementById('phrase').value;
  var d = false;
  //Logic version 3
  for(var i = 0; i < phrase.length; i++) {
    var cancel = false;
    if(cancel === false) {
      var sin = (phrase[i]).toUpperCase();
      console.log("Single letter: " + sin);
      if(phrase[i+1] !== undefined) {
        console.log("There is an element after index");
        var dou = (phrase[i]).toUpperCase() + (phrase[i+1]).toLowerCase();
      } else {
        console.log("There is not an element after index");
        var dou = false;
      }
      console.log("Double letters: " + dou);
      
      //console.log(dou !== true);
      //console.log(d === false);
      //console.log([elems[0]], elems[0].indexOf(dou) >= 0);
      if(((dou !== true) && (d === false)) && (elems[0].indexOf(dou) >= 0)) {
        console.log("Double not just previously used and there is no double value and double value found in index");
        elemPhrase.push(dou);
        d = true;
      } else {
        console.log("Double value not found in index. Moving to single value...");
        if(elems[1].indexOf(sin) >= 0) {
          console.log("Single value found in index");
          elemPhrase.push(sin);
        } else {
          console.log("Single value not found in index");
        }
        d = false;
      }
      console.log(elemPhrase + "\n\n\n");
	} else {
	  elemPhrase = false;
  }
  console.log(elemPhrase);
  if(elemPhrase) {
    var s = "";
    for(var t=0;t<elemPhrase.length;t++){s=s.concat(elemPhrase[t]+" ");}
    document.getElementById('text').innerHTML = s;
  } else {
    document.getElementById('text').innerHTML = "Unable to create phrase."
  }
  }
}

  
/*
//Logic version 2
if(phrase[i+1] !== undefined) {
  if((elems.indexOf((phrase[i]).toUpperCase() + (phrase[i+1]).toLowerCase()) >= 0) && (d === false)) {
    console.log((phrase[i]).toUpperCase() + (phrase[i+1]).toLowerCase());
    d = true;
  }
} else if((elems.indexOf((phrase[i]).toUpperCase() + (phrase[i+1]).toLowerCase()) >= 0) && (d === true)) {
  console.log(phrase[i].toUpperCase());
}
  if(d === true) {
  d = false;
} else {
  d = true;
}
*/
  
/*
//Logic version 1
if(elems.includes(phrase[i].toUpperCase() + phrase[i+1].toLowerCase())) {
 elemPhrase.append(phrase[i].toUpperCase() + phrase[i+1].toLowerCase());
} else if(elems.includes(phrase[i].toUpperCase()) {
 elemPhrase.append(phrase[i].toUpperCase());
}
*/
