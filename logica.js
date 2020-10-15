var altura = 0, largura = 0, vidas = 1, tempo = 30
var mosquito
var classe

var criaMosquitoTempo = 1500

var nivel = window.location.search //retorna do ponto de interrogação pra direita
nivel = nivel.replace('?', '')
alert(nivel)

if ( nivel === 'normal' ) {
	criaMosquitoTempo = 1500
} else if ( nivel === 'dificil' ) {
	criaMosquitoTempo = 1000
} else {
	criaMosquitoTempo = 750
}

var cronometro = setInterval( function() {
 	
 	tempo-- 

 	if ( tempo < 0 ) {
 		clearInterval(cronometro)
 		clearInterval(criaMosca)
 		window.location.href = "vitoria.html"
 	}else {
 		document.getElementById('cronometro').innerHTML = tempo //innerHTML é tudo que está dentro da TAG
 	}

 } ,1000) //setInterval(<acao>,tempo) de forma recorrente

function ajustaTamanhoTela() { //obtém largura e altura disponíveis para o jogo
	altura = window.innerHeight
	largura = window.innerWidth
	//console.log(largura, altura)
}

ajustaTamanhoTela()

function posicaoRandomica () {

	//remover mosquito anterior caso exista
	if ( document.getElementById('mosquito') ) {
		document.getElementById('mosquito').remove()

		if ( vidas >= 3 ) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "img/coracao_vazio.png"
			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 100
	var posicaoY = Math.floor(Math.random() * altura) - 100 //math vai de 0 até muito próximo de 1

	posicaoX = posicaoX < 0 ? 0 :posicaoX
	posicaoY = posicaoY < 0 ? 0 :posicaoY

	//console.log(posicaoX, posicaoY)

	//criando elementos html
	mosquito = document.createElement('img')
	mosquito.src = 'img/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute' //não depende de nenhum outro componente da página
	mosquito.id = 'mosquito'
	mosquito.onclick = function() { 
		this.remove() //this faz referência ao próprio elemento HTML que chama a função
	}

	document.body.appendChild(mosquito) //adiciona o elemento ao 'body'
}

function tamanhoAleatorio() {
	classe = Math.floor(Math.random() * 3)
	//console.log(classe)

	switch (classe){
		case 0:
			return 'mosquito1'
			break
		case 1:
			return 'mosquito2'
			break
		default:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	lado = Math.floor(Math.random() * 2)
	//console.log(lado)

	if ( lado == 0 ) {
		return 'ladoA'
	} else {
		return 'ladoB'
	}
}



