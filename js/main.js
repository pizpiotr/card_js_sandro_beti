


document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM is ready.');
    
    const typo = document.querySelector('.typo');
    const wrapper = document.querySelector('.wrapper');

    var w = window.innerWidth;
    var whalf = w*0.5;
    
    wrapper.setAttribute("style", "left: " +(whalf - 215)+ "px;");



wrapper.addEventListener('mousemove', e => {
    var fontcurs = e.pageX;
    var wleft = wrapper.style.left;
    var xtypo = e.pageX;
    const parsed = parseInt(wleft, 10);

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    const weyght = scale(fontcurs, parsed, parsed + 430, 0, 900);

    const parsednav = scale(parsed, parsed + 430, 0, 300);

    var xvalue = xtypo - parsed;


     if(e.pageX > parsed + 140){
         xvalue = 140;
     }
     
    typo.setAttribute("style", "left: " +(xvalue)+ "px;")
    typo.style['font-variation-settings'] = "'wght'" + weyght;


console.log(typo.style.left);

    
})




  });