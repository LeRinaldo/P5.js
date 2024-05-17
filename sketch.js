let cor;      // cor da bolinha
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
  createCanvas(700, 600); // width x height
  
  //definir cor de fundo
  background(color(70,90,60));
  
  //definir cor inicial do circulo de forma aleatória
  cor = color(random(100,255), random(0,255), random(0,255));
  
  // valor inicial dos circulos no eixo X é 0 (mais a esqueda possivel)
  circuloX = [0,0,0];
  
  // valor inicial dos circulos no eixo Y. Cada um em uma altura (heigth) aleatória.
  circuloY = [random(height), random(height), random(height)];
}

// circuloX = 0,0,0  
// circuloY = 300, 150 , 150

function draw() {
  
  fill(cor);
  
  //laço de repetição para cada circulo que foi listado no array circuloX
  for (let contador in circuloX) {
    // console.log (contador)
    
   //desenha o circulo 
  circle(circuloX[contador], circuloY[contador], 50);  
    
  
  circuloX[contador] += random (0,3); // aumenta os valor X entre 0 e 3 pixels (para a direita) e 
  circuloY[contador] += random (-3,3); // mexe para cima(-3) ou para baixo(3) no eixo Y 
    
    //Se chegar o valor do circulo no eixo X for maior ou igual á largura do canva
    // Muda o valor do circulo no eixo X para 0
    // muda o valor do circulo no eixo y para qualquer altura(heigth) possivel
    if (circuloX[contador] >= width){
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
   
  } // fim do laço de repetição. Se andou em todo os itens do array circuloX, vai pra proximos comandos.
    //se não, volta e aumenta o contador em +1
 

  // Se clicar o mouse for pressionado
  // muda a variaveil cor (usada para definir o preechimento(fill) das bolas) para uma cor aleatoria 
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
    
}