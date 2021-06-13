


document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM is ready.');
    
    const typo = document.querySelector('.typo');
    const typo2 = document.querySelector('.typo2');
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
    const antiweyght = scale(fontcurs, parsed, parsed + 430, 900, 0);

    const parsednav = scale(parsed, parsed + 430, 140, 0);

    var xvalue = xtypo - parsed;
    var xvalue2 = xvalue - parsednav;

    //  if(e.pageX > parsed + 130){
    //      xvalue = 130;
    //  }
    
    var xvalue2 = scale(xvalue, 0, 430, 0, 130 )

    typo.setAttribute("style", "left: " +(xvalue2)+ "px;");
    typo.style['font-variation-settings'] = "'wght'" + weyght;

    var antival = parseInt(typo.style.left, 10);
    var antixvalue = xvalue2 - 2*antival;

   

    typo2.setAttribute("style", "left: " +(antixvalue)+ "px;");
    typo2.style['font-variation-settings'] = "'wght'" + antiweyght;



console.log(xvalue);

    
})




  });