const ceu = document.querySelector('.ceu');
const moon = document.querySelector('.moon');
const date = document.querySelector('.date');
const hours = document.querySelector('.hours');

function stars() {
    const numberStars = Math.round(Math.random() * 100);
    for(let i = 0; i < numberStars; i++) {
        const star = document.createElement('span');
        ceu.appendChild(star);
    }
    const allStars = document.querySelectorAll('span');
    allStars.forEach(item => {
        let postionX = Math.round(Math.random() * 2000);
        let postionY = Math.round(Math.random() * 2000);
        item.style.transform = ` translate(${postionX}px, ${postionY + 20}px)`

    })    
}

function atualizandoData() {
    let data = new Date()
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let mes = `${data.getDate()} - ${meses[data.getMonth()]} - ${data.getFullYear()}`
    let hora = `${data.getHours()}: ${data.getMinutes()}: ${data.getSeconds()}`

    return {mes, hora} 
}

function mostrarData() {

    date.innerHTML += atualizandoData().mes;
    // hours.innerHTML += atualizandoData().hora;
}

let count = -500;

function moveMoon() {        
    count++    
    if(count >= 2400) {
        moon.style.transition = 'none';
        count = -500;
    } else if(count <= 150 || count >= 1900) {
        moon.style.transition = '0.8s linear';
        moon.style.backgroundColor = "#FFA400";
        ceu.style.backgroundColor = "#9E2B25";
    } else if(count > 0 ) {
        moon.style.backgroundColor = "#fff";
        ceu.style.backgroundColor = "#001427";
    }

    moon.style.left = `${count}px`;
}

function time() {
    setInterval(moveMoon, 10);
}

window.addEventListener('load', ()=> {
    stars();  
    time();
    mostrarData();

    console.log("%cMinha Primeira Animação Com", "font-size: 1.4rem; color: #333; font-weight: bold;");
    console.log("%cJavaScript", "font-size: 1.8rem; color: #FFA737; font-weight: bold;");
})





