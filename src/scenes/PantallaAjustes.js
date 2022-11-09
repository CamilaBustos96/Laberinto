import Phaser from 'phaser'

export default class PantallaAjustes extends Phaser.Scene
{   

	constructor()
	{
		super('pantalla-ajustes') 
	}

   

	preload()
    {

        this.load.image("Fondo", "assets/Interfases/Pantallas/Fondo.png")
        this.load.image("BotonX", "assets/Interfases/Botones/Boton_Salir.png")
        this.load.image("España", "assets/Interfases/Botones/spainflag.png")
        this.load.image("Brasil", "assets/Interfases/Botones/brflag.png")
        this.load.image("Usa", "assets/Interfases/Botones/usaflag.png")
        this.load.image("Si", "assets/Interfases/Botones/SonicSi.png")
        this.load.image("No", "assets/Interfases/Botones/SonicNo.png")
    }

    create()
    {
        
        //FONDO
        this.add.image(0, 0, 'Fondo').setOrigin(0, 0).setScale(0.21, 0.28)
        //TEXTO
        this.Ajustes = this.add.text(120, 50, "AJUSTES", {fontFamily: 'Courier New',fontSize: "130px" ,color: "black"});
        this.Sonido = this.add.text(200, 250, "Sonido", {fontFamily: 'Courier New',fontSize: "50px" ,color: "black"});
        this.Idioma = this.add.text(175, 350, "Idioma", {fontFamily: 'Courier New',fontSize: "50px" ,color: "black"});
        //BOTONES
        var botonvolver = this.add.image(760, 10, "BotonX" ).setOrigin(0, 0).setScale(0.1, 0.15)
        botonvolver.setInteractive()
        botonvolver.on("pointerdown", () => this.scene.start('pantalla-menu') );

        //IDIOMAS FUTUROS
        const buttonPortuguese = this.add.image(430, 350, "Brasil" ).setOrigin(0, 0).setScale(0.1, 0.15)
        const buttonEnglish = this.add.image(500, 350, "Usa" ).setOrigin(0, 0).setScale(0.1, 0.15)
        const buttonSpanish = this.add.image(360, 350, "España" ).setOrigin(0, 0).setScale(0.1, 0.15)

        //SONIDO
        this.ssi = this.add.image(390, 250, "Si" ).setOrigin(0, 0).setScale(0.1, 0.15)
        this.no = this.add.image(460, 250, "No" ).setOrigin(0, 0).setScale(0.1, 0.15)
    }

   

}