
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {myFunction(this);}
//   xhttp.open("GET", "/Preguntas1");
//   xhttp.send();
// }
// function cargaPregunta(xml) {
//   const xmlDoc = xml.responseXML;
//   const x = xmlDoc.getElementsByTagName("test");
//   for (let i = 0; i <x.length; i++) {
//     // x[i].getElementsByTagName("question")[0].childNodes[0].nodeValue
//     console.log('hola')
//     // x[i].getElementsByTagName("choices")[0].childNodes[0].nodeValue;
//   }
//   document.getElementById("demo").innerHTML = table;
// }

if (window.XMLHttpRequest) {
   xhttp=new XMLHttpRequest();
   }
xhttp.open("GET","Pregunta.xml",false);
xhttp.send();
xmlDoc=xhttp.responseXML; 


function cargaPregunta(){
  q = document.getElementsByTagName('question')[0]
  p = document.getElementById('pregunta').innerHTML = q
}
