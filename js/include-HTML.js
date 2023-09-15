function includeHTML() {
    var z, file, xhtml;
    var i;
    var emit;
    z = document.getElementsByTagName("*");
    for (i = 0; i<z.length; i++) {
    emit = z[i];
    file = emit.getAttribute("include-html");
     if (file) {
         xhtml = new XMLHttpRequest();
         xhtml.onreadystatechange = function () {
         if (this.readyState == 4) {
            if(this.status == 200) {emit.innerHTML = this.responseText;}
            if(this.status == 404) {emit.innerHTML = "Page not found.";}
            emit.removeAttribute("include-html");
            includeHTML();
          }
          } 
xhtml.open("GET", file, true);
xhtml.send();
return;
    }
}
};
includeHTML();