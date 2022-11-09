import Phaser, { Scene } from 'phaser'


export default class ClasePerdiste extends Phaser.Scene{
	
    #botonreiniciar;
    #botonmenu;
    constructor()
	{
		super("pantalla-perdiste");
	}

	preload()
    {
        this.load.image("Fondo", "assets/Interfases/Pantallas/Fondo.png");
        this.load.image("Reinicio", "assets/Interfases/Botones/Boton_Reinicio.png");
        this.load.image("Menu", "assets/Interfases/Botones/Boton_Menu.png");
    }

    create()
    {
        //FONDO
        this.add.image(0, 0, 'Fondo').setOrigin(0, 0).setScale(0.21, 0.28);

        //TEXTO
        let titulo1 = this.add.text(120, 50, '¡LLEGASTE!', {fontFamily: 'Courier New',fontSize: "100px" ,color: "black"});
        
        //BOTONES
        this.#botonreiniciar = this.add.image(280, 300, 'Reinicio').setOrigin(0, 0).setScale(0.2, 0.25)
        this.#botonreiniciar.setInteractive()
        this.#botonreiniciar.on('pointerdown', () => this.scene.start('pantalla-parque') );

        this.#botonmenu = this.add.image(430, 300, "Menu" ).setOrigin(0, 0).setScale(0.2, 0.25)
        this.#botonmenu.setInteractive()
        this.#botonmenu.on("pointerdown", () => this.scene.start('pantalla-menu') );
    }//

    update()
    {

    }
   
}