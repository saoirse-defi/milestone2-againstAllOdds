const WINDOW_WIDTH = $(window).innerHeight();
const WINDOW_HEIGHT = $(window). innerWidth();

let app, surface, container, texture, keyTracker;
let spaceship, keys = {};

window.onload = () => {
     app = new PIXI.Application({
        width: 1000,
        height: 666,
        backgroundColor: 0x000000
    });

    document.querySelector("#game-div").appendChild(app.view); //adding the application to document in order to view

    //preloading assets for performance
    app.loader.baseUrl = "images";
    app.loader.add("spaceship", "spaceship.png"); //only asset so far

    app.loader.onProgress.add(loadingStatus);
    app.loader.onError.add(errorReport);
    app.loader.onComplete.add(loadingFinished);

    app.loader.load();


    // no longer needed [texture = PIXI.Texture.from("images/spaceship.png");] //creating texture from image


    //[spaceship = new PIXI.Sprite(texture);] //creating sprite from texture


    //app.stage.on("pointermove", movePlayer);

}

//loader progress functions and error reporting

    let loadingStatus = (e) => {

    }

    let errorReport = (e) => {
        console.error("Error: " + e.message);
    }

    let loadingFinished = (e) => {
        container = new PIXI.Container({ //fixed sprite not centering issue
            width: 1000,
            height: 666
        });

        spaceship = PIXI.Sprite.from(app.loader.resources.spaceship.texture);
        spaceship.anchor.set(0.5); //set sprite position to center of app
        spaceship.x = app.view.width / 2;
        spaceship.y = app.view.height / 2;

        container.addChild(spaceship);

        app.stage.addChild(container);

        app.stage.interactive = true;

        //keyboard event handlers
        window.addEventListener("keydown", keyPressed);
        window.addEventListener("keyup", keyReleased);


        app.ticker.add(gameLoop);


        keyTracker = document.querySelector("#keys");

    }


//mouse tracking function
/*
    let movePlayer = (e) => {
        let pos = e.data.global;

        spaceship.x = pos.x;
        spaceship.y = pos.y;
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
    let gameLoop = () => {
        keyTracker.innerHTML = JSON.stringify(keys);

        //W key
        if(keys["87"]){
            spaceship.y -= 5; //5 being movement speed, lets set as own variable later
        }
        //A key
        if(keys["65"]){
            spaceship.x -= 5;
        }
        //S key
        if(keys["83"]){
            spaceship.y += 5;
        }
        //D key
        if(keys["68"]){
            spaceship.x += 5;
        }


    }

/*
let game = {

    init: (container, surface) => {
        this.container = container;
        this.surface = surface;

        this.loadAssets();

        this.player = Object.create(player);
        this.player.init(this);
    }

    //loadAssets:

    //start:

    //play: 

    //end:
}



window.onload = () => {
    app = new PIXI.Application({
        width: 1000,
        height: 666,
        backgroundColor: 0x000000
    });


    document.body.appendChild(app.view);

     
    player = new PIXI.Sprite.from("images/spaceship.png"); //file does not exist yet
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    app.stage.addChild(player);

    app.stage.interactive = true;
    app.stage.on("pointermove", trackMouse);
    

};

let trackMouse = (e) => {
    let position = e.data.global;

    player.x = position.x;
    player.y = position.y;
}


$(document).ready(() => {
    container = document.querySelector("container");
    container.width = WINDOW_WIDTH;
    container.height = WINDOW_HEIGHT;

    surface = container.getContext("2d");

    app = Object.create("game");
    app.init(container, surface);

})
*/

