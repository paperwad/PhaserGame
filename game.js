var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

let b;

function create ()
{
    //create animations
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });





    //  A simple background for our game
    this.add.image(400, 300, 'sky');
    
    class Character extends Phaser.GameObjects.Sprite {
        constructor(scene, x, y, texture, frame) {
            super(scene, x, y, texture, frame);
            
            //adds physics and existing
            scene.add.existing(this);
            scene.physics.add.existing(this);
            this.body.setCollideWorldBounds(true);
            console.log(Object.getOwnPropertyNames(this.body));
            //movement numbers
        }
    
        move (direction) {
            
            this.body.setAccelerationX(1000);
            
    
        };
    }
    

    b = new Character(this, 400, 300, 'dude');
    
}

function update ()
{
    b.move();
    
}
