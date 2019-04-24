function changeToText(elmnt,txt) {
  const curr = elmnt.innerHTML;
  elmnt.style.color = "yellow";
  elmnt.innerHTML = txt;
  //elmnt.style.backgroundImage = "url(https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwid4t3Ao-jhAhWqIDQIHfUxCa8QjRx6BAgBEAU&url=https%3A%2F%2Fmykoreankitchen.com%2Fkorean-fried-chicken%2F&psig=AOvVaw3hJXf7TEk28Xy8eVmrHIKb&ust=1556179761097739)"
  elmnt.style.backgroundImage = "url('/picture/" + curr + ".jpg')";
  elmnt.style.backgroundSize = "cover";
}

function changeTextBack(elmnt, txt){
    elmnt.innerHTML = txt;
    elmnt.style.color = "white";
    elmnt.style.background = "transparent";
}