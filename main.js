var canvas= new fabric.Canvas('myCanvas');


playerX=10;
playerY=10;

blockImageWidth=30;
blockImageHeight=30;

var playerObject = "";
var blockImageObject = "";

function playerUpdate(){ 

    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
    playerObject.set({ 
    top:playerY,
    left:playerX


    });
    canvas.add(playerObject);
    });

}
function newImage(getImage) { 
    
    fabric.Image.fromURL(getImage, function(Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
    blockImageObject.set({ 
    top:playerY,
    left:playerX

});
canvas.add(blockImageObject);
});
}

window.addEventListener("keydown" , myKeyDown)
function myKeyDown(e){ 
    keyPressed = e.keyCode; 
    console.log(keyPressed); 


if(e.shiftKey == true && keyPressed =='80'){
    console.log("p e shift pressionadas juntas");
    blockImageWidth = blockImageWidth + 10;
    blockImageHeight = blockImageHeight + 10;
    document.getElementById("currentWidth").innerHTML= blockImageWidth;
    document.getElementById("currentHeight").innerHTML=blockImageHeight;

    

 } 

 if(e.shiftKey == true && keyPressed =='77'){
    console.log("m e shift pressionadas juntas");
    blockImageWidth = blockImageWidth - 10;
    blockImageHeight = blockImageHeight - 10;
    document.getElementById("currentWidth").innerHTML= blockImageWidth;
    document.getElementById("currentHeight").innerHTML=blockImageHeight;
    
    

 } 
if(keyPressed == '38') //tecla de cima
{ up ();
    console.log("cima");  //tecla de

} 
if(keyPressed == '40')  //tecla de baixo
{ down ();
    console.log("baixo");

} 
if(keyPressed == '37') //tecla esquerda
{ left ();
    console.log("esquerda");

} 
if(keyPressed == '39') //tecla para direita
{ right ();
    console.log("direita");

} 
if (keyPressed == '87') {

    newImage('wall.jpg');
    console.log("W")
} 
if (keyPressed == '76') {

    newImage('light_green.png');
    console.log("L")
} 
if (keyPressed == '71') {

    newImage('ground.png');
    console.log("G")
} 
if (keyPressed == '84') {

    newImage('trunk.jpg');
    console.log("T")
} 
if (keyPressed == '82') {

    newImage('roof.jpg');
    console.log("R")
} 
if (keyPressed == '89') {

    newImage('yellow_wall.png');
    console.log("Y")
} 
if (keyPressed == '68') {

    newImage('dark_green.png');
    console.log("D")
} 
if (keyPressed == '85') {

    newImage('unique.png');
    console.log("U")
} 
if (keyPressed == '67') {

    newImage('cloud.jpg');
    console.log("C")
} 





} 

function up () {

    if (playerY >=0 ) {
        playerY=playerY-blockImageHeight;
        console.log("alutra da imagem do bloco="+ blockImageHeight);
        console.log("quando a tecla direcional cima for clicada,x="+ playerX+",y="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    } 

} 
function down () {

    if (playerY <=500 ) {
        playerY=playerY+blockImageHeight;
        console.log("alutra da imagem do bloco="+ blockImageHeight);
        console.log("quando a tecla direcional cima for clicada,x="+ playerX+",y="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    } 

} 

function left () {

    if (playerX >=0 ) {
        playerX=playerX-blockImageWidth;
        console.log("largurada imagem do bloco="+ blockImageWidth);
        console.log("quando a tecla direcional cima for clicada,x="+ playerX+",y="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    } 

} 

function right () {

    if (playerX <=850 ) {
        playerX=playerX+blockImageWidth;
        console.log("largurada imagem do bloco="+ blockImageWidth);
        console.log("quando a tecla direcional cima for clicada,x="+ playerX+",y="+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    } 

} 

