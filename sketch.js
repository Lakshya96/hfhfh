var database,game,form,player,allplayers;
var car1,car2,car3,car4,cars,car1Img,car2Img,car3Img,car4Img,trackImg;
var playerCount = 0;
var gameState = 0;
function preload() {
    
}
function setup(){
    createCanvas(600,600);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("lightBlue");
    //console.log(displayHeight);
    //console.log(displayWidth);
    if(playerCount===4){
    gameState=1;
    game.updateState(1);
    }
    if(gameState===1){
        clear();
        game.play(); 
        drawSprites();
    }
}