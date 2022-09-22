import Phaser from 'phaser'


export default class PantallaAjustes extends Phaser.Scene
{
	constructor()
	{
		super('pantalla-ajustes')
	}

	preload()
    {
        this.load.image("FondoAjuste", "assets/Interfases/Pantallas/Inter_Ajustes.png")
        this.load.image("BotonX", "assets/Interfases/Botones/Boton_Salir.png")
    }

    create()
    {
        this.add.image(0, 0, 'FondoAjuste').setOrigin(0, 0).setScale(0.21, 0.28)
        var botonvolver = this.add.image(760, 10, "BotonX" ).setOrigin(0, 0).setScale(0.1, 0.15)
        botonvolver.setInteractive()
        botonvolver.on("pointerdown", () => this.scene.start('pantalla-menu') );
    }

    update()
    {

    }
}