import Phaser from 'phaser'

export default class PantallaMenu extends Phaser.Scene
{
    #botonplay;
    #botonajuste1;
    
	constructor()
	{
		super('pantalla-menu')
        this.musica = null;
	}

	preload()
    {

        this.load.image('panta', 'assets/Interfases/Pantallas/LAB1.png')
        this.load.image("play", "assets/Interfases/Botones/Icon_Play2.png")
        this.load.image("ajustes", "assets/Interfases/Botones/Icon_Settings.png")
        this.load.audio("musicamenu", "mussic/MenuLab.wav")

    }

    create()
    {
        this.add.image(0, 0, 'panta').setOrigin(0, 0).setScale(0.45, 0.6)
        this.add.image(355, 280, "play" ).setOrigin(0, 0).setScale(1.2, 1.6)
        this.add.image(368, 410, "ajustes" ).setOrigin(0, 0).setScale(0.8, 1)
        this.#botonplay = this.add.image(355, 280, 'play').setOrigin(0, 0).setScale(1.2, 1.6)
        this.#botonplay.setInteractive()
        this.#botonplay.on('pointerdown', () => this.scene.start('pantalla-laberinto1') );
        this.#botonajuste1 = this.add.image(368, 410, "ajustes" ).setOrigin(0, 0).setScale(0.8, 1)
        this.#botonajuste1.setInteractive()
        this.#botonajuste1.on("pointerdown", () => this.scene.start('pantalla-ajustes') );

        this.musica = this.sound.add('musicamenu', { loop: true });
        this.musica.play();
    }

    update()
    {
        
    }


    
}
