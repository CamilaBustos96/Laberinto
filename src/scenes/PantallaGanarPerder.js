import Phaser from 'phaser'


export default class PantallaGanarPerder extends Phaser.Scene
{
	constructor()
	{
		super('pantalla-ganar-perder')
	}

	preload()
    {
        this.load.image("Fondo", "assets/Interfases/Pantallas/Fondo.png");

    }

    create()
    {
        //FONDO
        this.add.image(0, 0, 'Fondo').setOrigin(0, 0).setScale(0.21, 0.28);
        //TEXTO
        let titulo1 = this.add.text(120, 50, 'TU TIEMPO', {fontFamily: 'Courier New',fontSize: "100px" ,color: "black"});
       
    }

    update()
    {
        
    }
}