import Phaser from 'phaser'
import { sharedInstance as events } from "../scenes/EventCenter";


export default class ClasePersonaje extends Phaser.Scene
{

    #player;

	constructor()
	{
		super('clase-personaje')
	}

	preload()
    {
        this.load.spritesheet("Leah", "assets/Mapas/Objetos/Leah-sprite.png", { frameWidth: 16, frameHeight: 32 });
    }

    create()
    {
        //PERSONAJE

        this.player = this.physics.add.sprite(100, 590, "Leah");
        this.player.setCollideWorldBounds(true);
        this.player.setScale(2);

        //CAMARA
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setBounds(0, 0, 1024, 2048);
        this.cameras.main.setZoom(2);
        
        //ANIMACION
        
        const walkdown = (
            {
            key: "walk-down",
            frames: this.anims.generateFrameNumbers("Leah", { start: 0, end: 3 }),
            frameRate: 0,
            repeat: -1
        });
        this.anims.create(walkdown);

        const walkup = ({
            key: "walk-up",
            frames: this.anims.generateFrameNumbers("Leah", { start: 8, end: 11 }),
            frameRate: 8,
            repeat: -1,
        });
        this.anims.create(walkup);

        const walkleft = ({
            key: "walk-left",
            frames: this.anims.generateFrameNumbers("Leah", { start: 12, end: 15 }),
            frameRate: 12,
            repeat: -1,
        });
        this.anims.create(walkleft);
        
        const walkright = ({
            key: "walk-right",
            frames: this.anims.generateFrameNumbers("Leah", { start: 4, end: 7 }),
            frameRate: 4,
            repeat: -1,
        });
        this.anims.create(walkright);

        const idle = ({
            key: "idle",
            frames: this.anims.generateFrameNumbers("Leah", { frames: [4]}),
            frameRate: 4,
            repeat: -1,
        });
        this.anims.create(idle);

        const keys = [ "walk-up", "walk-down", "walk-left", "walk-right", "idle" ];
        this.player.anims.startAnimation("idle");

        this.cursors = this.input.keyboard.createCursorKeys();
        //this.physics.add.collider(this.#player, Map);
        

    }

    update()
    {
        
    }

    mobilidad(player)
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setAngle(0).setVelocityX(-200);
            this.player.anims.startAnimation("walk-left");
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setAngle(0).setVelocityX(200);
            this.player.anims.startAnimation("walk-right");

        }

        if (this.cursors.up.isDown)
        {
            this.player.setAngle(0).setVelocityY(-200);
            this.player.anims.startAnimation("walk-up");

        }
        else if (this.cursors.down.isDown)
        {
            this.player.setAngle(0).setVelocityY(200);
            this.player.anims.startAnimation("walk-down");

        }      

    }
    

}