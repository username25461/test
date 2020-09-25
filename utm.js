
      
document.addEventListener("DOMContentLoaded", function() {
 var hvost = window.location.search.substring(1);
 
 var elements = document.getElementsByTagName('iframe');

 for (var i = 0; i < elements.length; i++) {
  var newHref = elements[i].src;
  if (newHref.indexOf("#")!=-1) continue;
  if (newHref.indexOf("?")==-1) newHref += "?";
  else newHref += "&";
  if (hvost!="") elements[i].src = newHref + hvost;
 }
});
