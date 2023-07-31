import Phaser, { GameObjects } from 'phaser'
import StateMachine from './statemachine';
import { sharedInstance as events } from "../scenes/EventCenter";


export default class Personaje extends Phaser.Physics.Arcade.Sprite {

    #player;
    #cursors;
    #statemachine;

    constructor(scene, x, y) {

        super(scene, x, y, "caballeror");
        this.scene = scene;
        this.createAnimacion();

        this.play('idle');

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        

        this.setSize(12, 12);
        this.setScale(0.7);
        this.setBounce(0, 0);
        this.setCollideWorldBounds(true);
        this.body.enable = true;

        //this.body.onWorldBounds = true;
        this.setPosition(x, y)
    }

    createAnimacion() {

        this.scene.anims.create({
            key: "walk-down",
            frames: this.scene.anims.generateFrameNumbers("caballeror", { start: 1, end: 5 }),
            frameRate: 5,
            repeat: 0,
            duration: 0.05,
        });

        this.scene.anims.create({
            key: "walk-up",
            frames: this.scene.anims.generateFrameNumbers("caballeror", { start: 1, end: 5 }),
            frameRate: 5,
            repeat: 0,
            duration: 0.05,
        });

        this.scene.anims.create({
            key: "walk-left",
            frames: this.scene.anims.generateFrameNumbers("caballeror", { start: 1 , end: 5 }),
            frameRate: 5,
            repeat: 0,
            duration: 0.05,
        });

        this.scene.anims.create({
            key: "walk-right",
            frames: this.scene.anims.generateFrameNumbers("caballeror", { start: 1, end: 5 }),
            frameRate: 5,
            repeat: 0,
            duration: 0.05,
        });

        this.scene.anims.create({
            key: "idle",
            frames: this.scene.anims.generateFrameNumbers("caballeror", { start: 1 , end: 1 }),
            frameRate: 5,
            repeat: 0,
        });


        const keys = ["walk-up", "walk-down", "walk-left", "walk-right", "idle"];
    }



    moverIzquierda()
    {
        this.play("walk-left");
        this.setScale(-0.7, 0.7);
        this.setAngularVelocity(0).setVelocityX(-100);

    }

    moverArriba()
    {
        this.setAngularVelocity(0).setVelocityY(-100);
        this.play("walk-up");
    }

    moverAbajo()
    {
        this.setAngularVelocity(0).setVelocityY(100);;
        this.play("walk-down");

    }

    moverDerecha()
    {
        this.play("walk-right");
        this.setScale(0.7, 0.7);
        this.setAngularVelocity(0).setVelocityX(100);

    }

}