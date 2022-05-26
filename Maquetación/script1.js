// Contadores
let i = 0;
let o = 1;

// Carga las preguntas mediante AJAX
function cargaPregunta() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this, i);
      i++;
    }
  };
  xhttp.open("GET", "Preguntas1.xml", true);
  xhttp.send();
}

// Carga las preguntas y los contadores
function cargaPreguntar() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this, i);
      i++;
      o++;
    }
  };
  xhttp.open("GET", "Preguntas1.xml", true);
  xhttp.send();
}

// Zona de preguntas
function myFunction(xml, i) {
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("question");
  q = x[i].getElementsByTagName("wording")[0].childNodes[0].nodeValue;

  r1 =
    x[i].getElementsByTagName("choices")[0].childNodes[1].childNodes[0]
      .nodeValue;
  r2 =
    x[i].getElementsByTagName("choices")[0].childNodes[3].childNodes[0]
      .nodeValue;
  r3 =
    x[i].getElementsByTagName("choices")[0].childNodes[5].childNodes[0]
      .nodeValue;
  r4 =
    x[i].getElementsByTagName("choices")[0].childNodes[7].childNodes[0]
      .nodeValue;

  res = document.getElementById("numero").innerHTML = "Pregunta nº: " + (i + 1);
  punt = document.getElementById("puntuacion").innerHTML = "Puntuación: " + o;

  document.getElementById("pregunta").innerHTML = q;
  document.getElementById("btn1").innerHTML = r1;
  document.getElementById("btn2").innerHTML = r2;
  document.getElementById("btn3").innerHTML = r3;
  document.getElementById("btn4").innerHTML = r4;
}

// Tiempo
window.onload = updateClock;
var totalTime = 60;
function updateClock() {
  document.getElementById("tiempo").innerHTML = totalTime;
  if (totalTime == 0) {
    alert("Has perdido");
  } else {
    totalTime -= 1;
    setTimeout("updateClock()", 1000);
  }
}
function reinicio() {
  location.reload();
}
