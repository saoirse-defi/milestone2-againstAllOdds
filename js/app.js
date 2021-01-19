const WINDOW_WIDTH = $(window).innerHeight();
const WINDOW_HEIGHT = $(window). innerWidth();

let app, surface, container, texture, keyTracker;
let keys = {};
let hero = {};
let enemy = {};
let theGame = {};

class Human extends PIXI.Sprite{
    constructor(x, y, width, height, texture, speed, radius){
        super(texture);
        this.anchor.set(0.5);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.radius = radius;
    }
}


class Alien extends PIXI.Sprite{
    constructor(x, y, width, height, texture, speed, reward, radius){
        super(texture);
        this.anchor.set(0.5);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.reward = reward;
        this.radius = radius;
    }
}


let game = {
    init: () => {
        this.hero = heroCreation();
        this.enemy = enemyCreation();
        this.gameLoop();
    },


    errorReport: (e) => {
        console.log(e);
    },

    loadingFinished: (e) => {
        this.container = new PIXI.Container({ //fixed sprite not centering issue
            width: 1000,
            height: 666
        });

        this.container.addChild(hero);
        this.container.addChild(enemy);

        app.stage.addChild(container);

        app.stage.interactive = true;

        //keyboard event handlers
        this.window.addEventListener("keydown", keyPressed);
        this.window.addEventListener("keyup", keyReleased);


        app.ticker.add(gameLoop);


        this.keyTracker = document.querySelector("#keys");

    },

    heroCreation: () => {
        this.hero = new Human(500, 550, 30, 30, app.loader.resources["hero"].texture, 8, 1);
    },

    enemyCreation: () => {
        this.enemy = new Alien(app.view.width/2, app.view.height/2, 30, 30, app.loader.resources["enemy"].texture, 6, 100, 2);
    },

    gameLoop: () => {
        keyTracker.innerHTML = JSON.stringify(keys);

        //W key
        if(keys["87"]){
            hero.y -= 5; //5 being movement speed, lets set as own variable later
        }
        //A key
        if(keys["65"]){
            hero.x -= 5;
        }
        //S key
        if(keys["83"]){
            hero.y += 5;
        }
        //D key
        if(keys["68"]){
            hero.x += 5;
        }
    }
}


window.onload = () => {

    app = new PIXI.Application({
            width: 1000,
            height: 666,
            backgroundColor: 0x000000
        });

    document.querySelector("#game-div").appendChild(app.view);
    
    theGame = Object.create(game);

    app.loader.baseUrl = "images";
    app.loader
        .add("hero", "hero.png")
        .add("enemy", "enemy.png");

    app.loader.onError.add(theGame.errorReport());
    app.loader.onComplete.add(theGame.loadingFinished());

    theGame.init(); 

   /* canvas = document.querySelector("#game-div");
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;
	drawingSurface = canvas.getContext("2d"); */

}




//mouse tracking function
/*
    let movePlayer = (e) => {
        let pos = e.data.global;

        hero.x = pos.x;
        hero.y = pos.y;
    };
*/
    
//keyboard functions
    let keyPressed = (e) => {
        keys[e.keyCode] = true;
    }

    let keyReleased = (e) => {
        keys[e.keyCode] = false;
    }


    //this function will contain most of game logic ie. updating positioning, key press, collision detection





