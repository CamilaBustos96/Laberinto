import Phaser, { Scene } from 'phaser'
import { es_AR, en_UK, pt_BR, currentLanguage } from '../enums/lenguaje';

export default class ClasePerdiste extends Phaser.Scene{
	
    #botonreiniciar;
    #botonmenu;
    constructor()
	{
		super("pantalla-perdiste");
        this.currentLanguage = 'es_AR';
	}

	preload()
    {
        this.load.image("Fondo", "assets/Interfases/Pantallas/LAB2.png");
        this.load.image("Reinicio", "assets/Interfases/Botones/Icon_Repeat.png");
        this.load.image("Menu", "assets/Interfases/Botones/Icon_Home.png");
        this.load.image("Trofeo", "assets/Objetos/Icon_Star.png");
    }

    create()
    {
        //FONDO
        this.add.image(0, 0, 'Fondo').setOrigin(0, 0).setScale(0.45, 0.6);

        //TROFEO
        this.add.image(335 ,110, "Trofeo").setOrigin(0 ,0).setScale(2, 2.5);
        this.add.image(445 ,135, "Trofeo").setOrigin(0 ,0).setScale(1.5, 2);
        this.add.image(255 ,135, "Trofeo").setOrigin(0 ,0).setScale(1.5, 2);


        //BOTONES
        this.#botonreiniciar = this.add.image(280, 300, 'Reinicio').setOrigin(0, 0).setScale(1.5, 1.8)
        this.#botonreiniciar.setInteractive()
        this.#botonreiniciar.on('pointerdown', () => this.scene.start('pantalla-laberinto1') );

        this.#botonmenu = this.add.image(430, 300, "Menu" ).setOrigin(0, 0).setScale(1.5, 1.8)
        this.#botonmenu.setInteractive()
        this.#botonmenu.on("pointerdown", () => this.scene.start('pantalla-menu') );
    }

   
}