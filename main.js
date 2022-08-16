var nome = window.prompt("Digite seu primeiro nome:")
document.getElementById('saudacoes').style.fontSize = '1.3rem'
document.getElementById('saudacoes').style.color = "white"
saudacoes.innerHTML = 'Boas vindas,<br>' + nome +'!'


const zeroFill = n => { return ('0' + n).slice(-2); } // Cria intervalo 
const interval = setInterval(() => { 
    // Pega o horário atual 
    const now = new Date(); 
    // Formata a data conforme dd/mm/aaaa hh:ii:ss 
    const dataHora = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds()); 
    // Exibe na tela usando a div#data-hora 
    document.getElementById('hora').innerHTML = dataHora; 
    var div = document.getElementById('hora'); 
    div.style.color = 'white'
    div.style.fontSize = '1.3rem' 
}, 1000); 
