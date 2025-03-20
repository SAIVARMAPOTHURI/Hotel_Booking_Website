function hotel(){
  var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'hotels.html');
    iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').appendChild(iframe);
}

function history(){
  var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'history.html');
    iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').appendChild(iframe);
}

function openeluru() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'Eluru.html');
    iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').appendChild(iframe);
}

 function opennellore() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'nellore.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function opensrikakulam() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'srikakulam.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openkurnool() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'kurnool.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openongole() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'ongole.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openguntur() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'guntur.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openvizayanagaram() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'vizayanagaram.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openkakinada() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'kakinada.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openkadapa() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'kadapa.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openvisakhapatnam() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'visakhapatnam.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openvijayawada() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'vijayawada.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function opentirupati() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'tirupati.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

function openanantapur() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'anantapur.html');
  iframe.setAttribute('style', 'width:100%; height:100vh; border:none; overflow:hidden;');
  document.getElementById('content').innerHTML = '';
  document.getElementById('content').appendChild(iframe);
}

let c=0;
function city(){
  var a = document.getElementById("box1");
  c++;
  if(c%2!=0)
  {
    a.style.height="38%";
    a.style.border ="1px solid black";
    a.style.transition="1.1s";
  }
  else{
    a.style.height="";
    a.style.border ="";
    a.style.transition="1.1s";
  }
}
