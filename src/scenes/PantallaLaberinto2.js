import Phaser, { Tilemaps } from 'phaser'
import ClasePersonaje from '../clases/Personaje'


export default class PantallaLaberinto2 extends Phaser.Scene
{
    #player;

	constructor()
	{
		super('pantalla-laberinto2')

	}

	preload()
    {
        //IMAGENES
        this.load.image("alfombra", "assets/Mapas/Tiles/Stardew-Festivales.png")
        this.load.image("paredes", "assets/Mapas/Tiles/Stardew-Mazmo1.png")
        this.load.image("suelo", "assets/Mapas/Tiles/Stardew-Suelos.png")
        //MAPA
        this.load.tilemapTiledJSON("label2", "assets/Mapas/LaberintoOscuro.json")


    }

    create()
    {

        //Mapa
        const map2 = this.make.tilemap({ key : "label2", width: 200, height: 200, tileWidth: 16, tileHeight: 16 });

        //Tilesets
        const tileset1 = map2.addTilesetImage("Stardew-Festivales", "alfombra");
        const tileset2 = map2.addTilesetImage("Stardew-Mazmo1", "paredes");
        const tileset3 = map2.addTilesetImage("Stardew-Suelos", "suelo");

        //Capas
        const suelofondo = map2.createLayer("Suelo1", tileset3, 0, 0);
        const portal = map2.createLayer("Portal", tileset1, 0, 0);
        const paredH1 = map2.createLayer("ParedHorizontal1", tileset2, 0, 0);
        const paredH2 = map2.createLayer("ParedHorizontal2", tileset2, 0, 0);
        const paredH3 = map2.createLayer("ParedHorizontal3", tileset2, 0, 0);
        const paredV1 = map2.createLayer("ParedVertical", tileset2, 0, 0);      

        this.scene.launch('clase-personaje', this.#player);

    }

    update()
    {
        
    }

    llamadaPersonaje()
    {
        Phaser.Scene.call(this, { key: 'clase-personaje', active: true });
    }


}