// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

function getCookie(name) {
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}

$(document).ready(function() {
  let richting = getCookie("richting");
  if (richting === 'CCW') {
    document.getElementById('AS1').style.transform = 'rotate(180deg)';
    document.getElementById('AS2').style.transform = "rotate(180deg)";
    document.getElementById('AS3').style.transform = "rotate(0deg)";
    document.getElementById('AS4').style.transform = "rotate(0deg)";
    document.getElementById('AS5').style.transform = 'rotate(-90deg)';
    document.getElementById('AS6').style.transform = "rotate(90deg)";
  } else if (richting === 'CW') {
    document.cookie = "richting=CW";
    document.getElementById('AS1').style.transform = 'rotate(0deg)';
    document.getElementById('AS2').style.transform = "rotate(0deg)";
    document.getElementById('AS3').style.transform = "rotate(180deg)";
    document.getElementById('AS4').style.transform = "rotate(180deg)";
    document.getElementById('AS5').style.transform = 'rotate(90deg)';
    document.getElementById('AS6').style.transform = "rotate(-90deg)";
  }
});
