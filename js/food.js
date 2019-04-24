function changeToText(elmnt,txt) {
  const curr = elmnt.innerHTML;
  elmnt.style.color = "yellow";
  elmnt.innerHTML = txt;
  elmnt.style.backgroundImage = "url('/picture/" + curr + ".jpg')";
  elmnt.style.backgroundSize = "cover";
}

function changeTextBack(elmnt, txt){
    elmnt.innerHTML = txt;
    elmnt.style.color = "white";
    elmnt.style.background = "transparent";
}