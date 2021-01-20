const WINDOW_WIDTH = $(window).innerHeight();
const WINDOW_HEIGHT = $(window). innerWidth();

let app, surface, texture, theGame, hero, alien1;
let container = {};
let keyTracker = {};
let keys = {};
let enemy = {};

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
        this.xVel = 0;
        this.yVel = 0;
    }

    hone(a, b) {
        let dx = a - this.x;
        let dy = b - this.y;
        let honeAngle = Math.atan2(dy, dx);

        this.xVel = this.speed * Math.cos(honeAngle);
        this.yVel = this.speed * Math.sin(honeAngle);
    }

    stayWithinBounds() {
        //don't know if WINDOW_WIDTH/WINDOW_HEIGHT is the correct variable
        this.x = Math.max(0 + this.radius, Math.min(this.x + this.xVel, WINDOW_WIDTH - this.radius));
        this.y = Math.max(0 + this.radius, Math.min(this.y + this.yVel, WINDOW_HEIGHT - this.radius));
    }
}


let gameLoop = (delta) => {

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

    alien1.hone(hero.x, hero.y);
}

 //keyboard functions
    let keyPressed = (e) => {
        keys[e.keyCode] = true;
    }

    let keyReleased = (e) => {
        keys[e.keyCode] = false;
    }


let errorReport = (e) => {
    console.log("Error: " + e);
}

let loadingFinished = () => {
    initialSpawn();

    container = new PIXI.Container({ //fixed sprite not centering issue
            width: 1000,
            height: 666
        });

    container.addChild(hero);
    container.addChild(alien1);

    app.stage.addChild(container);

    app.stage.interactive = true;

    //keyboard event handlers
    window.addEventListener("keydown", keyPressed);
    window.addEventListener("keyup", keyReleased);

    app.ticker.add(gameLoop);

    keyTracker = document.querySelector("#keys");
}

let initialSpawn = () => {
    hero = new Human(500, 550, 30, 30, app.loader.resources["hero"].texture, 8, 1);
    alien1 = new Alien(app.view.width/2, app.view.height/2, 30, 30, app.loader.resources["enemy"].texture, 6, 100, 2);
}


window.onload = () => {

    app = new PIXI.Application({
            width: 1000,
            height: 666,
            backgroundColor: 0x000000
        });

    document.querySelector("#game-div").appendChild(app.view);

    app.loader.baseUrl = "images";
    app.loader
        .add("hero", "hero.png")
        .add("enemy", "enemy.png");

    app.loader.onError.add(errorReport);
    app.loader.onComplete.add(loadingFinished);

    app.loader.load();


   /* canvas = document.querySelector("#game-div");
	canvas.width = WINDOW_WIDTH;
	canvas.height = WINDOW_HEIGHT;
	drawingSurface = canvas.getContext("2d"); */

}

