// document.getElementsByTagName('question')[0].getElementsByTagName('wording')[0].childNodes[0].nodeValue

// r1 = document.getElementsByTagName('question')[0].getElementsByTagName('choices')[0].childNodes[1].attributes[0]

let i = 0;
let o = 0;

function cargaPregunta2() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this, i);
      i++;
      console.log(i);
    }
  };
  http.open("GET", "Preguntas2.xml", true);
  http.send();
}

function cargaPreguntar2() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this, i);
      i++;
      o++;
      console.log(i);
    }
  };
  http.open("GET", "Preguntas2.xml", true);
  http.send();
}

function myFunction2(xml, i) {
  var xmlDoc = xml.responseXML;
  var y = xmlDoc.getElementsByTagName("question");
  qq = y[i].getElementsByTagName("wording")[0].childNodes[0].nodeValue;

  rr1 =
    y[i].getElementsByTagName("choices")[0].childNodes[1].childNodes[0]
      .nodeValue;
  rr2 =
    y[i].getElementsByTagName("choices")[0].childNodes[3].childNodes[0]
      .nodeValue;
  rr3 =
    y[i].getElementsByTagName("choices")[0].childNodes[5].childNodes[0]
      .nodeValue;
  rr4 =
    y[i].getElementsByTagName("choices")[0].childNodes[7].childNodes[0]
      .nodeValue;

  res = document.getElementById('numero').innerHTML = 'Pregunta nº: ' + (i + 1)
  punt = document.getElementById('puntuacion').innerHTML = 'Puntuación: ' + o

  document.getElementById("pregunta").innerHTML = qq;
  document.getElementById("btn1").innerHTML = rr1;
  document.getElementById("btn2").innerHTML = rr2;
  document.getElementById("btn3").innerHTML = rr3;
  document.getElementById("btn4").innerHTML = rr4;
}

