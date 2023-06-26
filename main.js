function relogio() {
    const elementoRelogio = document.querySelector(".relogio");

    const horaAtual = new Date();

    var img = document.querySelector('#imagem');
    
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = 18

    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector('.frase')

    dia = new Array('Domingo', 'Segunda-feira', 'terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()} `

    if (formatoHoras >= 0 && formatoHoras < 12) {
        document.body.style.backgroundImage = "url(https://img.freepik.com/fotos-premium/jogador-jogando-por-joystick-com-computador-desafio-de-jogos-e-e-sports-streaming-online-conceito-de-torneio_42100-263.jpg"
       
        img.src = "https://img.freepik.com/fotos-premium/jogador-jogando-por-joystick-com-computador-desafio-de-jogos-e-e-sports-streaming-online-conceito-de-torneio_42100-263.jpg"

    } else if (formatoHoras >= 18 && formatoHoras < 18) {
        document.body.style.backgroundImage = "url(https://images2.alphacoders.com/120/thumb-1920-1209425.png)"
        
        img.src = "https://p4.wallpaperbetter.com/wallpaper/459/471/765/city-sunset-anime-artwork-wallpaper-preview.jpg"

    }
    else {
        document.body.style.backgroundImage = "url(https://cdn.wallpapersafari.com/82/83/shbcAW.jpg)"

        img.src = "https://2.bp.blogspot.com/-lF98ITeWfrs/Vj-hO6XvSyI/AAAAAAAACYA/Ri5bzHEmVDw/s1600/noite%2Bestrelada.jpg"
    }

}

setInterval(relogio, 1000)