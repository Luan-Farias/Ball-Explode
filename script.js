function addBola() {
    let bola = document.createElement('div');
    bola.setAttribute('class', 'bola');

    let x = Math.floor(Math.random() * 500);
    let y = Math.floor(Math.random() * 500);

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    bola.setAttribute('style', `left:${x}px;top:${y}px;background-color:rgb(${r},${g},${b});`);
    bola.addEventListener('click', (e)=>{
        document.body.removeChild(e.target);
    });

    document.body.appendChild(bola);
}

setInterval(addBola, 1000);