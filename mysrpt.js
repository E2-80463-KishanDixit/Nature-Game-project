document.onkeydown=function(e){
    console.log("key code is:", e.keycode)
    if(e.keycode==38){
        rabbit = document.querySelector('.rabbit');
        rabbit.classList.add('animaterabbit');
        setTimeout(() => {
            rabbit.classList.remove('animaterabbit');
        }, 500);

    }
}