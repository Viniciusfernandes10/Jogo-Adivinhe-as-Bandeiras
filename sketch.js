//http://colabeduc.org/descricao/show/1441
//https://youtu.be/AyGzW6ds6sM
var tela = 1;
var largura = 200;
var altura = 50;
var xMenu = 50;
var yMenu1 = 115;
var yMenu2 = 175;
var yMenu3 = 245;
var limg = 400;
var himg = 400;
var ximg = 0;
var yimg = 0;
var img;
var img1;
var img2;
var imgTelaParabens;
var imgTelaGameOver;
var img3Japão;
var img4França;
var img5Canada;
var img6Alemanha;
var img7Argentina;
var img8Jamaica;
var img9Uruguai;
var img10CoreiaDoSul;
var img11Espanha;
var img12México;
var img13Chile;
var img14Itália;
var img15China;
var img16Suíça;
var img17Portugal;
var img18Austrália;
var img19Holanda;
var img20Inglaterra;
var img21Colômbia;
var img22Bélgica;
var xBotaoVoltar = 15;
var yBotaoVoltar = 14;
var lBotaoVoltar = 30;
var hBotaoVoltar = 25;
var paises = ["Japão", "França", "Canadá", "Alemanha", "Argentina", "Jamaica", "Uruguai", "Coreia do Sul", "Espanha", "México", "Chile", "Itália", "China", "Suíça", "Portugal", "Austrália", "Holanda", "Inglaterra", "Colômbia", "Bélgica"];
var atualBandeiraIndex = 0;
var score = 0;
var mostrarDica;
var fase = 1;

function preload(){ 
  img = loadImage("tela_1.js.png");
  img1 = loadImage("tela_4.js.png");
  img2 = loadImage("tela_3.js.png");
  img3Japão = loadImage("tela_2.js.png");
  img4França = loadImage("França.js.png");
  img5Canada = loadImage("Canadá.js.png");
  img6Alemanha = loadImage("Alemanha.js.png");
  img7Argentina = loadImage("Argentina.js.png");
  img8Jamaica = loadImage("Jamaica.js.png");
  img9Uruguai = loadImage("Uruguai.js.png");
  img10CoreiaDoSul = loadImage("CoreiadoSul.js.png");
  img11Espanha = loadImage("Espanha.js.png");
  img12México = loadImage("México.js.png");
  img13Chile = loadImage("Chile.js.png");
  img14Itália = loadImage("Itália.js.png");
  img15China = loadImage("China.js.png");
  img16Suíça = loadImage("Suíça.js.png");
  img17Portugal = loadImage("Portugal.js.png");
  img18Austrália = loadImage("Austrália.js.png");
  img19Holanda = loadImage("Holanda.js.png");
  img20Inglaterra =loadImage("Inglaterra.js.png");
  img21Colômbia = loadImage("Colômbia.js.png");
  img22Bélgica = loadImage("Bélgica.js.png");
  imgTelaGameOver = loadImage("TelaGameOver.js.png");
  imgTelaParabens = loadImage("TelaParabens.js.png");
}

function setup() {
  createCanvas(400, 400);
  input = createInput();
  input.position(70, 300);
  input.attribute("comprimentoMaximo", "100");

  botaoConfirmar = createButton("Confirmar");
  botaoConfirmar.position(input.x + input.width + 10, 300);
  botaoConfirmar.mousePressed(VerifiqueResposta);

  botaoDica = createButton("Dica");
  botaoDica.position(input.x, input.y + input.height + 10);
  botaoDica.mousePressed(mostrarDica);
  input.hide()
  botaoDica.hide()
  botaoConfirmar.hide()
}

function draw() {
  input.hide()
  botaoDica.hide()
  botaoConfirmar.hide()
  textStyle(NORMAL);
  
  // Tela do Menu
  if (tela == 1){
  image(img, ximg, yimg, limg, himg);
  
    // Play do jogo
  textAlign(CENTER);
  textSize(26);
 
  if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) {
    stroke(120);
    fill("#02020272");
    rect(90, 115, largura, altura, 15);
    if (mouseIsPressed){
        tela = 2
    }
  }
  fill(240);
  text("Play", 190, 150);
  
  // Informação do Jogo
  if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
  stroke(120);
  fill("#02020272");
  rect(85, 175, largura, altura, 15);
  if (mouseIsPressed){
      tela = 3
    }
  } 
  fill("20");
  text("Informações", 190, 210);  
    
  // Créditos do Jogo
  if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
    stroke(120);
    fill("#02020272")
    rect(90, 245, largura, altura, 15);
    if (mouseIsPressed){
      tela = 4
    }
  }
  fill("20");
  noStroke();
  text("Créditos", 190, 280);
  }
  // inicializando a tela 2
    if(tela == 2){
      tela2(); 
      
  //Botão Voltar  
  if ( mouseX > xBotaoVoltar && mouseX < xBotaoVoltar + lBotaoVoltar && mouseY > yBotaoVoltar && mouseY < yBotaoVoltar + hBotaoVoltar) {
    stroke(20);
    fill("#FF5722")
    rect(15, 14, 30, 25, 20);
    fill("#0A0A0A")
    text("←",30,30);
    textSize(19);
    if (mouseIsPressed){
      input.hide()
      tela = 1
    }
  }
    }
  // inicializando a tela 3
    if(tela == 3){
      tela3();
      
  //Botão Voltar  
  if ( mouseX > xBotaoVoltar && mouseX < xBotaoVoltar + lBotaoVoltar && mouseY > yBotaoVoltar && mouseY < yBotaoVoltar + hBotaoVoltar) {
    stroke(20);
    fill("#FF5722")
    rect(15, 14, 30, 25, 20);
    fill("#0C0C0C")
    text("←",30,30);
    textSize(19);
    if (mouseIsPressed){
      tela = 1
    }
  }
    }
  // inicializando a tela 4
    if(tela == 4){
      tela4();
      
      // Botão Voltar
  if ( mouseX > xBotaoVoltar && mouseX < xBotaoVoltar + lBotaoVoltar && mouseY > yBotaoVoltar && mouseY < yBotaoVoltar + hBotaoVoltar) {
    stroke(20);
    fill("#FF5722")
    rect(15, 14, 30, 25, 20);
    fill("#0C0C0C")
    text("←",30,30);
    textSize(19);
    if (mouseIsPressed){
      tela = 1
    }
  }
    }

   // Inicializando tela 5
  if(tela == 5){
    background(imgTelaGameOver);
  
    fill("#FF3131")
    textSize(20);
    text(`Pontuação: ${score}`, 200, 350);
    
   stroke(20);
    fill("#FF3131")
    rect(15, 14, 30, 25, 20);
    fill("#0C0C0C")
    text("←",30,30);
    textSize(19);
    
    // Botão Voltar
 if( mouseX > xBotaoVoltar && mouseX < xBotaoVoltar + lBotaoVoltar && mouseY > yBotaoVoltar && mouseY < yBotaoVoltar + hBotaoVoltar) {
    
   if (mouseIsPressed){
      tela = 1
    }
  }
}
   //Inicializando tela 6
 if(tela == 6){
    background(imgTelaParabens);
   
    fill("#7ed957")
    textSize(20);
    text(`Pontuação: ${score}`, 200, 375);
  
    // Botão Voltar
    stroke(20);
    fill("#7ed957")
    rect(15, 14, 30, 25, 20);
    fill("#0C0C0C")
    text("←",30,30);
    textSize(19);
 if( mouseX > xBotaoVoltar && mouseX < xBotaoVoltar + lBotaoVoltar && mouseY > yBotaoVoltar && mouseY < yBotaoVoltar + hBotaoVoltar) {
   
    fill("#7ed9", 300, 200)
    rect(200, 300, 30, 25, 20);
    
    text("Fase 2")
    fill("#0C0C0C")
   
    if (mouseIsPressed){
      tela = 1
    }
  }
 }
}