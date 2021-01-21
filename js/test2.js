import { TilingSprite } from "pixi.js";

const _W = $(window).innerHeight();
const _H = $(window). innerWidth();
const canvas = document.getElementById("myCanvas");
const loader = PIXI.Loader.shared;
const sprites = {};
let texture, img, hero, alien, hero_t, alien_t;

window.onload = () => {

const app = new PIXI.Application({
    view: canvas, 
    width: _W,
    height: _H,
});

loader.baseUrl = "images";
loader.add("hero", "hero.png")
    .add("enemy", "enemy.png");

loader.load((loader, resources) => {
    sprites.hero = new TilingSprite(resources.hero.texture);
});

loader.onProgress.add(loadProgress);
loader.onError.add(loadError);
loader.onComplete.add(loadComplete);

}


function loadProgress(loader){
    console.log(loader.progress + "% loaded");
}

function loadError(){
    console.log("Load Error!");
}

function loadComplete() {
    
    sprites.hero.anchor.set(0.5);

    app.stage.interactive = true;

    //keyboard event handlers
    this.window.addEventListener("keydown", keyPressed);
    this.window.addEventListener("keyup", keyReleased);

    app.ticker.add(animate);
    app.ticker.add(gameLoop);
}

function animate(){
    //motion function
}

function gameLoop(){
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

//keyboard functions
    let keyPressed = (e) => {
        keys[e.keyCode] = true;
    }

    let keyReleased = (e) => {
        keys[e.keyCode] = false;
    }