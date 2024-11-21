let botaoSim = document.getElementById('sim');
let botaoNao = document.getElementById('nao');

function moverBotao() {
	let x = Math.random() * (window.innerWidth - 200);
	let y = Math.random() * (window.innerHeight - 100);
	botaoSim.style.position = 'absolute';
	botaoSim.style.top = y + 'px';
	botaoSim.style.left = x + 'px';
	setTimeout(moverBotao, 500); // repita a função a cada 0,5 segundos
}

function proximaPagina() {
	document.getElementById('proxima-pagina').style.display = 'block';
	botaoSim.style.display = 'none';
	botaoNao.style.display = 'none';
	clearTimeout(); // para a função moverBotao
}
