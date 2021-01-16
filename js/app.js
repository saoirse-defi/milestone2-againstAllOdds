const WINDOW_WIDTH = $(window).innerHeight();
const WINDOW_HEIGHT = $(window). innerWidth();

let app = new PIXI.Application({
        width: 1000,
        height: 666,
        backgroundColor: 0x000000
});

document.body.appendChild(app.view);

let container = new PIXI.Container();

app.stage.addChild(container);

let texture = PIXI.Texture.from("images/spaceship.png");

let spaceship = new PIXI.Sprite(texture);

container.addChild(spaceship);

spaceship.anchor.set(0.5);

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;


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

