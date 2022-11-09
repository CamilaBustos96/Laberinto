import Phaser from 'phaser'


export default class TiempoJugado extends Phaser.Scene
{

	constructor()
	{
		super("tiempo-jugado")

        Phaser.Scene.call(this, {key: "tiempo-jugado", active: true});
        this.TiempoInicial = 0,
        this.UI = this.scene;
	}

	preload()
    {
        
    }

    create()
    {
        
    }

    update()
    {

    }


   
}