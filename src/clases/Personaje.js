import Phaser from 'phaser'


export default class ClasePersonaje extends Phaser.Scene
{
	constructor()
	{
		super('clase-personaje')
	}

	preload()
    {
        
        //this.load.spritesheet("Leah", "assets/Objetos/spriteLeah.png", {frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet("Lea", "assets/Objetos/spriteLeah.png", {frameWidth: 18, frameHeight: 32 });
    }

    create()
    {
        this.add.image(0, 0, "Leah").setOrigin(0, 0).setScale(2, 2);

        this.cameras.main.setBounds(0, 0, 1024, 2048);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.plea = this.physics.add.image(400, 300, 'Lea');

        this.cameras.main.startFollow(this.plea, true);

        this.cameras.main.setZoom(2);
        
    }

    update()
    {
        this.plea.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.plea.setAngle(0).setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.plea.setAngle(0).setVelocityX(200);
        }

        if (this.cursors.up.isDown)
        {
            this.plea.setAngle(0).setVelocityY(-200);
        }
        else if (this.cursors.down.isDown)
        {
            this.plea.setAngle(0).setVelocityY(200);
        }

    }

}