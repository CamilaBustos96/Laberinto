import Phaser, { Tilemaps } from 'phaser'
import Personaje from '../clases/Personaje';


export default class PantallaLaberinto1 extends Phaser.Scene {
    player;

    constructor() {
        super('pantalla-laberinto1')
    }

    preload() {
        //MAPA
        this.load.image("festival", "assets/Mapas/Tiles/FestivalesStardew.png")
        this.load.image("cuevas", "assets/Mapas/Tiles/CuevasStardew.png")
        this.load.image("otoño", "assets/Mapas/Tiles/OtoñoStardew.png")
        this.load.tilemapTiledJSON("label1", "assets/Mapas/LaberintoTerror.json")

        //PERSONAJE
        this.load.spritesheet("Lea", "assets/Objetos/spriteLeah.png", { frameWidth: 16, frameHeight: 30.5 });
        this.load.spritesheet("Jugador", "assets/Objetos/dude.png", { frameWidth: 32, frameHeight: 48 });

    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        //MAPA LABERINTO 1
        const map1 = this.make.tilemap({ key: "label1", width: 200, height: 200, tileWidth: 16, tileHeight: 16 });

        const tileset1 = map1.addTilesetImage("FestivalesStardew", "festival");
        const tileset2 = map1.addTilesetImage("CuevasStardew", "cuevas");
        const tileset3 = map1.addTilesetImage("OtoñoStardew", "otoño");

        const suelofondo = map1.createLayer("Suelo", tileset2, 0, 0);
        const suelodecorado = map1.createLayer("SueloDeco", tileset3, 0, 0);
        const phorizontal = map1.createLayer("ParedesHorizontales", tileset1, 0, 0);
        const pvertical = map1.createLayer("ParedesVerticales", tileset1, 0, 0);
        const arbolt = map1.createLayer("ArbolesTronco", tileset3, 0, 0)
        const luminaria = map1.createLayer("Luces", tileset1, 0, 0);
        const objeto2 = map1.getObjectLayer("Enemigos");
        const objeto1 = map1.getObjectLayer("PersonajeLeah");
        const arbolc = map1.createLayer("ArbolesCopa", tileset3, 0, 0);


        phorizontal.setCollisionByProperty({ collides: true });
        pvertical.setCollisionByProperty({ collides: true });
        arbolt.setCollisionByProperty({ collides: true });
        luminaria.setCollisionByProperty({ collides: true });


        this.player = new Personaje(this, objeto1.objects[0].x, objeto1.objects[0].y);
        console.log("🚀 ~ file: PantallaLaberinto1.js ~ line 55 ~ objeto1", objeto1);

        this.cameras.main.startFollow(this.player);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.moverIzquierda();
        } else {
            if (this.cursors.right.isDown) {
                // derecha
            } else {
                if (this.cursors.up.isDown) {
                    this.player.moverArriba();
                }else {
                    if (this.cursors.down.isDown) {
                        // abajo
                    } else {
                        if(!this.player.anims.isPlaying){
                            this.player.setVelocityX(0);
                            this.player.setVelocityY(0);
                        }
                    }
                }
            }
        }
        
    }
}