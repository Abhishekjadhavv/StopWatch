const container = document.querySelector(".container"),
    minutes = container.querySelector(".Minutes"),
    seconds = container.querySelector(".seconds"),
    milliseconds = container.querySelector(".Milliseconds"),
    startBtn = container.querySelector(".start"),
    iTag = container.querySelector(".play");

  
let miseconds = newSeconds = newMinutes = 0;
let miSecId;

// ---- startWatch function here -----
function startWatch() {
    let classContain = iTag.classList.contains("bx-pause");
    if (!classContain) {
        iTag.classList.replace("bx-play", "bx-pause")
        startBtn.title = "Stop";
        miSecId = setInterval(() => {
            miseconds += 1;
            newSeconds+= miseconds === 100?1:0;
            newMinutes += newSeconds === 60 ?1:0;

            miseconds = miseconds === 100 ? 0: miseconds;
            newSeconds = newSeconds === 60 ? 0:newSeconds;
            newMinutes = newMinutes === 60 ?0:newMinutes;

            milliseconds.textContent = miseconds <= 9 ? `0${miseconds}` : miseconds;
            seconds.textContent = newSeconds <= 9 ? `0${newSeconds}` : newSeconds;
            minutes.textContent = newMinutes <= 9 ? `0${newMinutes}` : newMinutes;
            
        }, 10)
    } else {
        stopWatch();
    }
}

// ----- stopWatch function here -----
function stopWatch() {
    iTag.classList.replace("bx-pause", "bx-play");
    startBtn.title = "Start";
    clearInterval(miSecId);
}

// ------ resetWatch function here ------
function resetWatch() {
    miseconds = newSeconds = newMinutes =  0;
    clearInterval(miSecId);
    iTag.classList.replace("bx-pause", "bx-play");
    milliseconds.textContent = '00';
    seconds.textContent = '00';
    minutes.textContent ='00'; 
}


startBtn.addEventListener("click", startWatch);











