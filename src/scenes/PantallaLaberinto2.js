import Phaser, { Tilemaps } from 'phaser'
import ClasePersonaje from '../clases/Personaje'

export default class PantallaLaberinto2 extends Phaser.Scene
{
    #player;
    #cursors;

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
        //PERSONAJE
        this.load.spritesheet("Leah", "assets/Mapas/Objetos/Sprite-0001.png", { frameWidth: 16, frameHeight: 32, endFrame: 15 });
        

    }

    create()
    {
        //TECLADO
        //this.cursors = this.input.keyboard.createCursorKeys();

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
        
        //INTERACCION
        paredH2.setCollisionByProperty({ Collider: true });
        paredV1.setCollisionByProperty({ Collider: true });
        
        //CREACION DE PERSONAJE
        this.#player = new ClasePersonaje(this);
        //this.#player = new Anims(this)

        //COLLIDE
        this.physics.add.collider(this.#player, paredH2);
        this.physics.add.collider(this.#player, paredV1);

        //CAMARA
        this.cameras.main.startFollow(this.#player);
        this.cameras.main.setBounds(0, 0, 1024, 2048);
        this.cameras.main.setZoom(3);
        //BORRADOS
        //this.scene.launch('clase-personaje', this.#player);

    }
    

}