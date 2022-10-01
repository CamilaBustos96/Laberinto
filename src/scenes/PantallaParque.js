import Phaser from 'phaser'


export default class PantallaParque extends Phaser.Scene
{
	constructor()
	{
		super('pantalla-parque')
	}

	preload()
    {
        this.load.image("pantparck", "assets/Interfases/Pantallas/Inter_Parque.png")
        this.load.image("blabe1", "assets/Interfases/Botones/Laberinto1.png")
        this.load.image("blabe2", "assets/Interfases/Botones/Laberinto2.png")
        this.load.image("blabe3", "assets/Interfases/Botones/Laberinto3.png")

    }

    create()
    {
        this.add.image(0, 0, 'pantparck').setOrigin(0, 0).setScale(0.21, 0.28)

        var botonlaberinto1 = this.add.image(100, 300, "blabe1" ).setOrigin(0, 0).setScale(0.1, 0.15)
        botonlaberinto1.setInteractive()
        botonlaberinto1.on("pointerdown", () => this.scene.start('pantalla-laberintos') );

        var botonlaberinto2 = this.add.image(400, 300, "blabe2" ).setOrigin(0, 0).setScale(0.1, 0.15)
        botonlaberinto2.setInteractive()
        botonlaberinto2.on("pointerdown", () => this.scene.start('pantalla-laberinto-dos') );

        var botonlaberinto3 = this.add.image(700, 300, "blabe3" ).setOrigin(0, 0).setScale(0.1, 0.15)
        botonlaberinto3.setInteractive()
        botonlaberinto3.on("pointerdown", () => this.scene.start('pantalla-laberinto-tres') );
    }

    update()
    {
        
    }
}