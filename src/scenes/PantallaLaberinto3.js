import Phaser, { Tilemaps } from 'phaser'


export default class PantallaLaberinto3 extends Phaser.Scene
{
	constructor()
	{
		super('pantalla-laberinto3')
	}

	preload()
    {
        //MAPA
        this.load.tilemapTiledJSON("label3", "assets/Mapas/LaberintoGrande.json")

        //IMAGENES
        this.load.image("paredes", "assets/Mapas/Tiles/Stardew-Mazmo1.png")
        this.load.image("suelo", "assets/Mapas/Tiles/Stardew-Suelos.png")
        this.load.image("alfombra", "assets/Mapas/Tiles/Stardew-Festivales.png")

    }

    create()
    {
        //MAPA
        const map3 = this.make.tilemap({ key : "label3", width: 200, height: 200, tileWidth: 16, tileHeight: 16 });

        //TILESETS
        const tileset1 = map3.addTilesetImage("Stardew-Festivales", "alfombra");
        const tileset2 = map3.addTilesetImage("Stardew-Mazmo1", "paredes");
        const tileset3 = map3.addTilesetImage("Stardew-Suelos", "suelo");
        //CAPAS
        const suelofondo1 = map3.createLayer("Suelo1", tileset3, 0, 0);
        const suelofondo2 = map3.createLayer("Suelo2", tileset3, 0, 0);
        const suelofondo3 = map3.createLayer("Suelo3", tileset3, 0, 0);
        const paredh1 = map3.createLayer("ParedHorizontal1", tileset2, 0, 0);
        const paredh2 = map3.createLayer("ParedHorizontal2", tileset2, 0, 0);
        const paredh3 = map3.createLayer("ParedHorizontal3", tileset2, 0, 0);
        const paredv = map3.createLayer("ParedVertical", tileset2, 0, 0);


    }

    update()
    {
       
    }
}