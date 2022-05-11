// document.getElementsByTagName('question')[0].getElementsByTagName('wording')[0].childNodes[0].nodeValue


    // r1 = document.getElementsByTagName('question')[0].getElementsByTagName('choices')[0].childNodes[1].attributes[0]


function cargaPregunta() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "Preguntas1.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("question");
  for (i = 0; i <x.length; i++) { 
    q = x[i].getElementsByTagName("wording")[0].childNodes[0].nodeValue

    r1 = x[i].getElementsByTagName('choices')[0].childNodes[1].childNodes[0].nodeValue
    r2 = x[i].getElementsByTagName('choices')[0].childNodes[3].childNodes[0].nodeValue
    r3 = x[i].getElementsByTagName('choices')[0].childNodes[5].childNodes[0].nodeValue
    r4 = x[i].getElementsByTagName('choices')[0].childNodes[7].childNodes[0].nodeValue

  }
  document.getElementById("pregunta").innerHTML = q;
  document.getElementById("btn1").innerHTML = r1;
  document.getElementById("btn2").innerHTML = r2;
  document.getElementById("btn3").innerHTML = r3;
  document.getElementById("btn4").innerHTML = r4;
}