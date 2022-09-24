import Phaser from 'phaser'


export default class PantallaLaberintoUno extends Phaser.Scene
{
	constructor()
	{
		super('pantalla-laberinto-uno')
	}

	preload()
    {
        this.load.image("festival", "assets/Mapas/Tiles/FestivalesStardew.png")
        this.load.image("cuevas", "assets/Mapas/Tiles/CuevasStardew.png")
        this.load.image("otoño", "assets/Mapas/Tiles/OtoñoStardew.png")
        this.load.tilemapTiledJSON("labe1", "assets/Mapas/LaberintoTerror1.json")
    }

    create()
    {
       const map1 = this.make.tilemap({ key : "label1"});

       const tileset1 = map1.addTilesetImage("FestivalesStardew", "festival");
       const tileset2 = map1.addTilesetImage("CuevasStardew", "cuevas");
       const tileset3 = map1.addTilesetImage("OtoñoStardew", "otoño");

        

    }

    update()
    {
        
    }
}