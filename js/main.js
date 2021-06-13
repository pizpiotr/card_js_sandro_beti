


document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM is ready.');
    
    const typo = document.querySelector('.typo');

document.addEventListener('mousemove', e => {
    console.log(typo.style.fontWeight);
    
    // typo.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")

    // typo.setAttribute("style", "fontWeight: "+e.pageX+"px;")
    typo.style['font-variation-settings'] = "'wght'" + e.pageX;

})
  if(typo.left > "392px;" ){

    typo.setAttribute("style", "left: 393px;")

  }
  });