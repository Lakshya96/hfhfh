class Game {
    constructor(){
        
    }
    getState(){
        var refference=database.ref("gameState");
        refference.on("value", function(data){
            gameState=data.val();
        });
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        });
    }
    start(){
        if(gameState===0){
            console.log("test");
            player=new Player();
            player.getCount();
	        form=new Form();
	        form.display();
        }
    }
    play(){
        form.hide1();
    }
}