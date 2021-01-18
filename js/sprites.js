


let player = {

    init: (game) => {

        this.game = game;

        this.radius =    //dont know

        this.xPosition = 0;

        this.yPosition = 0;

        this.speed = 7;

        this.xVelocity = 0;

        this.yVelocity = 0;
    }

    //draw:

    //spawn:

};

let enemy = {

    //init
    init: (game) => {
        
        this.game = game; //possibly not needed for PIXIjs

        this.reset();

        this.enemyPool = [];

        this.radius =  // dont know what value to use
        this.dead = false;

        this.xPosition = 0;
        this.yPosition = 0;

        this.speed = 6;
        this.xVelocity = 0;
        this.yVelocity = 0;

        this.points = 100;
    }

    //hone

    //updatePosition

    //draw

    //spawn

    //die

};

let gate = {

    init: (game) => {
        
        this.game = game;

        this.reset();

        this.gatePool = [];
    }

    

}