import Phaser, { Tilemaps } from 'phaser'


export default class PantallaLaberintos extends Phaser.Scene
{
	constructor()
	{
		super('pantalla-laberintos')
	}

	preload()
    {
        this.load.image("festival", "assets/Mapas/Tiles/FestivalesStardew.png")
        this.load.image("cuevas", "assets/Mapas/Tiles/CuevasStardew.png")
        this.load.image("otoño", "assets/Mapas/Tiles/OtoñoStardew.png")
        this.load.tilemapTiledJSON("labe1", "assets/Mapas/LaberintoTerror.json")
    }

    create()
    {
        //MAPA LABERINTO 1
       const map1 = this.make.tilemap({ key : "label1"});

       const tileset1 = map1.addTilesetImage("FestivalesStardew", "festival");
       const tileset2 = map1.addTilesetImage("CuevasStardew", "cuevas");
       const tileset3 = map1.addTilesetImage("OtoñoStardew", "otoño");

       const suelofondo = map1.createLayer("Suelo", tileset2, 0, 0);
       const suelodecorado = map1.createLayer("SueloDeco", tileset3, 0, 0);
       const phorizontal = map1.createLayer("ParedesHorizontales", tileset1, 0,0);
       const pvertical = map1.createLayer("ParedesVerticales", tileset1, 0, 0);
       const arbolt = map1.createLayer("ArbolesTronco", tileset3, 0, 0)
       //const deco = map1.createLayer("Objetos", Tilemaps, 0, 0 );
       const luminaria = map1.createLayer("Luces", tileset1, 0,0);
       const objeto2 = map1.getObjectLayer("Enemigos");
       const objeto1 = map1.getObjectLayer("PersonajeLeah");
       const arbolc = map1.createLayer("ArbolesCopa", tileset3, 0, 0);

       phorizontal.setCollisionByProperty({ collides: true })
       pvertical.setCollisionByProperty({ collides: true })
       arbolt.setCollisionByProperty({ collides: true })
       luminaria.setCollisionByProperty({ collides: true })

        

    }

    update()
    {
        
    }
}