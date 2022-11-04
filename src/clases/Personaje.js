import Phaser, { GameObjects } from 'phaser'
import StateMachine from './statemachine';
import { sharedInstance as events } from "../scenes/EventCenter";


export default class ClasePersonaje extends Phaser.GameObjects.Sprite
{

    #player;
    #cursors;
    #statemachine;
	constructor(scene, x, y)
	{
        super(scene, x ,y , "Leah")
        scene.add.existing(this);
        //this.#player.setCollideWorldBounds(true);
        //this.#player.setScale(2);

    }

    createAnimacion()
    {
        
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
        
        this.#player.play("idle");

    
        //this.physics.add.collider(this.#player, Map);
    }
    createCursors()
    {
        //this.#cursors = this.input.keyboard.createCursorKeys();
        //this.#keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        //this.#keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        //this.#keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        //this.#keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        
        const { KeyCodes } = Phaser.Input.Keyboard; 
        this.KEYS = this.input.keyboard.addKeys({
            IZQUIERDA: KeyCodes.A,
            DERECHA: KeyCodes.D,
            ARRIBA: KeyCodes.W,
            ABAJO: KeyCodes.S,
        });

    }

    Movimiento()
    {
        ////HORIZONTAL
        const { KEYS } = this;
        if (KEYS.IZQUIERDA.isDown){
            this.#player.setAngle(0).setVelocityX(-200);
            this.#player.startAnimation("walk-left", true);
        }
        else if (KEYS.DERECHA.isDown){
            this.#player.setAngle(0).setVelocityX(-200);
            this.#player.startAnimation("walk-right", true);
        }
        //VERTICAL
        if (KEYS.ARRIBA.isDown){
            this.#player.setAngle(0).setVelocityY(-200);
            this.#player.startAnimation("walk-up", true);
        }
        else if (KEYS.ABAJO.isDown){
            this.#player.setAngle(0).setVelocityY(-200);
            this.#player.startAnimation("walk-down", true);
        }
        
    }

}