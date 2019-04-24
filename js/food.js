function changeToText(elmnt,txt) {
  elmnt.style.color = "yellow";
  elmnt.innerHTML = txt;
  elmnt.style.backgroundColor = "lightgrey";
}

function changeTextBack(elmnt, txt){
    elmnt.innerHTML = txt;
    elmnt.style.color = "white";
    elmnt.style.background = "transparent";
}