const WINDOW_WIDTH = $(window).innerHeight();
const WINDOW_HEIGHT = $(window). innerWidth();

let app = new PIXI.Application({
        width: 1000,
        height: 666,
        backgroundColor: 0x000000
});

document.body.appendChild(app.view); //adding the application to document in order to view

let container = new PIXI.Container();

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;


let texture = PIXI.Texture.from("images/spaceship.png"); //creating texture from image

let spaceship = new PIXI.Sprite(texture); //creating sprite from texture

spaceship.anchor.set(0.5); //set sprite position to center of app
spaceship.x = app.view.width / 2;
spaceship.y = app.view.height / 2;

app.stage.addChild(container);
container.addChild(spaceship);

//mouse tracking function
let movePlayer = (e) => {
    let pos = e.data.global;

    spaceship.x = pos.x;
    spaceship.y = pos.y;
};

app.stage.interactive = true;
app.stage.on("pointermove", movePlayer);


let surface;


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

