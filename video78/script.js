let isblack = true;
setInterval(() => {
    document.querySelector("button").style.backgroundColor = isblack ? "black" : "white"
    isblack = !isblack
}, 500);
let html = `<div class="text">Initializing Hacking...</div>
    <div class="text">Reading your Files...</div>
    <div class="text">Password files Detected...</div>
    <div class="text">
      Sending all passwords and personal files to server...
    </div>
    <div class="text">Cleaning up...</div>`

 