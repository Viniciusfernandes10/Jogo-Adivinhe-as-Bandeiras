function tela2(){
  if(fase == 1){
    image(img3Japão, ximg, yimg, limg, himg);
  }
  if(fase == 2){ 
    image(img4França, ximg, yimg, limg, himg);
  }
  if(fase == 3){
    image(img5Canada, ximg, yimg, limg, himg);
  }
  if(fase == 4){
    image(img6Alemanha, ximg, yimg, limg, himg);
  }
  if(fase == 5){
    image(img7Argentina, ximg, yimg, limg, himg);
  }
  if(fase == 6){
    image(img8Jamaica, ximg, yimg, limg, himg);
  } 
  if(fase == 7){
    image(img9Uruguai, ximg, yimg, limg, himg);
  }
  if(fase ==8){
    image(img10CoreiaDoSul, ximg, yimg, limg, himg);
  }
  if(fase ==9){
    image(img11Espanha, ximg, yimg, limg, himg);
  }
  if(fase ==10){
    image(img12México, ximg, yimg, limg, himg);
  }
  if(fase ==11){
    image(img13Chile, ximg, yimg, limg, himg);
  }
  if(fase ==12){
    image(img14Itália, ximg, yimg, limg, himg);
  }
  if(fase ==13){
    image(img15China, ximg, yimg, limg, himg);
  }
  if(fase == 14){
    image(img16Suíça, ximg, yimg, limg, himg);
  }
  if(fase == 15){
    image(img17Portugal, ximg, yimg, limg, himg);
  }
  if(fase == 16){
    image(img18Austrália, ximg, yimg, limg, himg);
  }
  if(fase == 17){
    image(img19Holanda, ximg, yimg, limg, himg);
  }
  if(fase == 18){
    image(img20Inglaterra, ximg, yimg, limg, himg);
  }
  if(fase == 19){
    image(img21Colômbia, ximg, yimg, limg, himg);
  }
  if(fase == 20){
    image(img22Bélgica, ximg, yimg, limg, himg);
  }

  input.show()
  botaoDica.show()
  botaoConfirmar.show()
  
  fill("#FF5722")
  rect(15, 14, 30, 25, 20);
  
  fill("#0C0C0C")
  text("←",30,30);
  textSize(19)
  
  textSize(20);
  fill("#0C0C0CFF")
   
  fill("#FF5722")
  rect(250, 11, 145, 25, 20);
  
  fill("#0C0C0CFF")
  text(`Pontuação: ${score}`, 320, 30);

} 
function telaPergunta() {
  
  textSize(64);
  text(paises[atualBandeiraIndex], 200, 200);

  textSize(20);
  text(`Pontuação: ${score}`, 200, 350);

  input.show();
  botaoConfirmar.show();
  botaoDica.show();
  botaoVoltar.hide();
}

function VerifiqueResposta() {
  var inputText = input.value();

  if (inputText === paises[atualBandeiraIndex]) {
    score += 10;

    atualBandeiraIndex++;

    if (atualBandeiraIndex === paises.length) {
      telaAtual = 3; // Parabéns
      tela = 6;
    } else {
      telaAtual = 1; // Próxima pergunta
      fase++;
    }

    input.value('');
  } else {
    score = 0;
    telaAtual = 2; // Game Over
    tela = 5;
  }
}


