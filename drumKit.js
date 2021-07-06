function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; //interrompe a função se uma tecla que não tiver audio associado for pressionada
    
    key.classList.add('playing');
    audio.currentTime = 0; //essa função faz com que o áudio inicie do começo toda vez que a tecla for pressionada
    audio.play();
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //pula a função se não for 'transform'
    
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);