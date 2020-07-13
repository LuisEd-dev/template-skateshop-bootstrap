function setCookie(){
    var tempodevida = new Date();
    tempodevida.setTime(tempodevida.getTime() + (1000 * 60 * 10 ));
    document.cookie = "modal=ok; expires="+ tempodevida.toGMTString() + '"';

}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

$(document).ready(function() {

    if(getCookie("modal") != "ok"){
        $('#modalPrincipal').modal('show');
    }
})
