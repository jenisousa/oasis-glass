function img1(){
    document.getElementById("imgP").src="css/imagens/imagem1.png";
}

function img2(){
    document.getElementById("imgP").src="css/imagens/imagem2.png";
}

function img3(){
    document.getElementById("imgP").src="css/imagens/imagem3.png";
}

function img4(){
    document.getElementById("imgP").src="css/imagens/imagem4.png";
}

function abrirJanela(pagina, largura, altura) {
    // Definindo centro da tela
    var esquerda = (screen.width - largura)/2;
    var topo = (screen.height - altura)/2;
    // Abre a nova janela
    minhaJanela = window.open(pagina,'','height=' + altura + ', width=' + largura + ', top=' + topo + ', left=' + esquerda);
   }