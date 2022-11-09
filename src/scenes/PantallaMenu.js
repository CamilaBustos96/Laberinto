import Phaser from 'phaser'




// Manejador de eventos centralizados para comunicacion de componentes

// Importacion
//import { sharedInstance as events } from './EventCenter'

// Emisor de mensaje de difusion
// Recibe el nombre del mensaje y los valores de parametro
// events.emit('health-changed', this.health)

// Receptor de mensaje, por ejemplo escena de UI
// Recibe el nombre del mensaje y una funcion callback a ejecutar
// events.on('health-changed', this.handleHealthChanged, this)


export default class PantallaMenu extends Phaser.Scene
{
    #botonplay;
    #botonajuste1;
    
	constructor()
	{
		super('pantalla-menu')
	}

	preload()
    {

        this.load.image('pantamenu', 'assets/Interfases/Pantallas/Inter_Inicio.png')
        this.load.image("play", "assets/Interfases/Botones/Boton_Play.png")
        this.load.image("ajustes", "assets/Interfases/Botones/Boton_Ajustes.png")

    }

    create()
    {
        this.add.image(0, 0, 'pantamenu').setOrigin(0, 0).setScale(0.21, 0.28)
        this.add.image(355, 300, "play" ).setOrigin(0, 0).setScale(0.2, 0.25)
        this.add.image(365, 430, "ajustes" ).setOrigin(0, 0).setScale(0.2, 0.25)
        this.#botonplay = this.add.image(355, 300, 'play').setOrigin(0, 0).setScale(0.2, 0.25)
        this.#botonplay.setInteractive()
        this.#botonplay.on('pointerdown', () => this.scene.start('pantalla-parque') );
        this.#botonajuste1 = this.add.image(365, 430, "ajustes" ).setOrigin(0, 0).setScale(0.2, 0.25)
        this.#botonajuste1.setInteractive()
        this.#botonajuste1.on("pointerdown", () => this.scene.start('pantalla-ajustes') );
        
      

    }

    update()
    {
        
    }

    
}
