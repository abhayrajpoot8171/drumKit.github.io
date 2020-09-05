const log = console.log; 
window.addEventListener("keydown", function(event) {
    const audio = document.querySelector(`audio[data-key= '${event.keyCode}']`);
    const key =   document.querySelector(`.sub-key[data-key= '${event.keyCode}']`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
   setInterval(function() {key.classList.remove("playing")},100); });


   