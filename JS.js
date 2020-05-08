function shtoLajmin {
    var titulli = document.createElement("h3");
    var teksti = document.createElement("p");
    var titulliContent = document.getElementById("titulli-new").value="";
    var tekstiContent = document.getElementById("permbajtja-new").value="";
    if (titulliContent == "" || tekstiContent == ""){
    alert ("Lajmi duhet te permbaje edhe titull edhe tekst");
    return;
    }
titulli.append(titulliContent);
teksti.append(tekstiContent);
var foto= document.createElement("img");
foto.src ="image/logo.webp";
foto.setAttribute("class","foto-lajmi");
var lajemet = document.getElementsByClassName("form-group");
    if (lajemet.length == 4){
    lajmet[3].parentNode.removeChild(lajmet[3]);
    }
var lajmi = document.createElement("div");
lajmi.append(foto);
lajmi.append(titulli);
lajmi.append(teksti);
lajmi.setAttribute("class","form-group")

var data = document.createElement("h6");
var data = new Date ();
var koha = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
data.append(koha);
lajmi.append(data);
var lajmetDiv = document.getElementsByClassName("right-side");
lajmetDiv[0].prepend(lajmi);

}
    function clearfields(){
        document.getElementsById("titulli-new").value="";
        document.getElementsById("permbajtja-new").value="";
    }