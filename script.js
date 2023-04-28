window.onload = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }

  const blob = document.getElementById("blob");

  let cursorX = window.innerWidth/2;
  let cursorY = window.innerHeight/2;
  let blobX = window.innerWidth/2;
  let blobY = window.innerHeight/2;

  window.onpointermove = e => {
    cursorX = e.clientX;
    cursorY = e.clientY;
  };

  function animateBlob() {
    blobX += (cursorX - blobX) * 0.01;
    blobY += (cursorY - blobY) * 0.01;

    blob.style.left = `${blobX}px`;
    blob.style.top = `${blobY}px`;

    requestAnimationFrame(animateBlob);
  }
  animateBlob();
}
