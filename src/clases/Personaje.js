import Phaser, { GameObjects } from 'phaser'
import StateMachine from './statemachine';
import { sharedInstance as events } from "../scenes/EventCenter";


export default class Personaje extends Phaser.Physics.Arcade.Sprite {

    #player;
    #cursors;
    #statemachine;

    constructor(scene, x, y) {
        super(scene, x, y, "Lea");
        this.scene = scene;
        this.createAnimacion();

        this.play('idle');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(1.5);
        this.setBounce(0, 0);
        //this.setCollideWorldBounds(true);

        this.body.onWorldBounds = true;
        this.setPosition(x, y)
    }

    createAnimacion() {
        this.scene.anims.create({
            key: "walk-down",
            frames: this.scene.anims.generateFrameNumbers("Lea", { start: 0, end: 3 }),
            frameRate: 0,
            repeat: 0.5,

           
        });

        this.scene.anims.create({
            key: "walk-up",
            frames: this.scene.anims.generateFrameNumbers("Lea", { start: 8, end: 11 }),
            frameRate: 8,
            repeat: 0.5,

            
        });

        this.scene.anims.create({
            key: "walk-left",
            frames: this.scene.anims.generateFrameNumbers("Lea", { start: 12, end: 15 }),
            frameRate: 12,
            repeat: 0.5,

           
        });

        this.scene.anims.create({
            key: "walk-right",
            frames: this.scene.anims.generateFrameNumbers("Lea", { start: 4, end: 7 }),
            frameRate: 4,
            repeat: 0.5,

        });

        this.scene.anims.create({
            key: "idle",
            frames: this.scene.anims.generateFrameNumbers('Lea', { start: 4, end: 4 }),
            frameRate: 4,
            repeat: 0.5,
        });


        const keys = ["walk-up", "walk-down", "walk-left", "walk-right", "idle"];
    }

    moverIzquierda(){
        this.setAngle(0).setVelocityX(-200);
        this.play("walk-left");
    }

    moverArriba(){
        this.setAngle(0).setVelocityY(-200);
        this.play("walk-up");
    }

    moverAbajo(){
        this.setAngle(0).setVelocityY(200);
        this.play("walk-down");
    }

    moverDerecha(){
        this.setAngle(0).setVelocityX(200);
        this.play("walk-right");
    }

}