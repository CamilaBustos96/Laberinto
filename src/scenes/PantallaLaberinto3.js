import Phaser, { Tilemaps } from 'phaser'
import Personaje from '../clases/Personaje'


export default class PantallaLaberinto3 extends Phaser.Scene
{
    player;
	constructor()
	{
		super('pantalla-laberinto3')
	}

	preload()
    {
        //AUDIO
        this.load.audio("chill", ["mussic/chill2.ogg", "mussic/chill1.mp3"]);
        //MAPA
        this.load.tilemapTiledJSON("label3", "assets/Mapas/LaberintoGrande.json")

        //IMAGENES
        this.load.image("paredes", "assets/Mapas/Tiles/Stardew-Mazmo1.png")
        this.load.image("suelo", "assets/Mapas/Tiles/Stardew-Suelos.png")
        this.load.image("alfombra", "assets/Mapas/Tiles/Stardew-Festivales.png")

        //PERSONAJE
        this.load.spritesheet("Lea", "assets/Objetos/spriteLeah.png", { frameWidth: 16, frameHeight: 30.5 });

    }

    create()
    {
        //TECLADO
        this.cursors = this.input.keyboard.createCursorKeys();

        //MAPA
        const map3 = this.make.tilemap({ key : "label3", width: 200, height: 200, tileWidth: 16, tileHeight: 16 });

        //TILESETS
        const tileset1 = map3.addTilesetImage("Stardew-Festivales", "alfombra");
        const tileset2 = map3.addTilesetImage("Stardew-Mazmo1", "paredes");
        const tileset3 = map3.addTilesetImage("Stardew-Suelos", "suelo");
        //CAPAS
        const suelofondo1 = map3.createLayer("Suelo1", tileset3, 0, 0);
        const suelofondo3 = map3.createLayer("Suelo3", tileset3, 0, 0);
        const paredh1 = map3.createLayer("ParedHorizontal1", tileset2, 0, 0);
        const objeto1 = map3.getObjectLayer("Personaje");
        const paredh2 = map3.createLayer("ParedHorizontal2", tileset2, 0, 0);
        const paredh3 = map3.createLayer("ParedHorizontal3", tileset2, 0, 0);
        const paredv = map3.createLayer("ParedVertical", tileset2, 0, 0);
        const suelofondo2 = map3.createLayer("Suelo2", tileset1, 0, 0);
        
        //COLLIDE
        paredh2.setCollisionByProperty({ Collider: true });
        paredv.setCollisionByProperty({ Collider: true });
        suelofondo2.setCollisionByProperty({ Collider: true });

        //PERSONAJE
        this.player = new Personaje(this, objeto1.objects[0].x, objeto1.objects[0].y);
        //console.log("🚀 ~ file: PantallaLaberinto3.js ~ line 55 ~ objeto1", objeto1);

        //CAPAS
        this.player.setDepth(20);
        paredh3.setDepth(25);
        paredv.setDepth(20);
        paredh1.setDepth(15);
        paredh2.setDepth(20);
        suelofondo1.setDepth(8);
        suelofondo2.setDepth(10);
        suelofondo3.setDepth(9);

        //COLLIDE
        this.physics.add.collider(this.player, paredh2);
        this.physics.add.collider(this.player, paredv);
        this.physics.add.collider(this.player, suelofondo2, this.LLegaste, null, this);

        //CAMARA
        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(2.5);
        
        //TIEMPO
        this.TiempoInicial = 0;
        this.TimeEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this})
        this.timeText = this.add.text(200, 100, 'Tiempo: ', {fontFamily: 'Courier New', fontSize: '80px', color: "black"});
        this.timeText.setScrollFactor(0);
        this.timeText.setDepth(50);

        //SONIDO
        this.musica = this.sound.add('chill',{loop: true});
        this.musica.play();
    }

    timer() 
    {
        if (!this.LLegaste) 
        {    
            this.TiempoInicial +=1; 
            this.timeText.setText('Tiempo: ' + this.TiempoInicial);
        }
        else
        {
            if (this.TiempoInicial == 50000) 
            {
            this.TimeEvent.paused = true;
            this.scene.start("pantalla-perdiste")
            }            
        }
    }
    update()
    {
        if (this.cursors.left.isDown) {
            this.player.moverIzquierda();
        } else {
            if (this.cursors.right.isDown) {
                this.player.moverDerecha();
            } else {
                if (this.cursors.up.isDown) {
                    this.player.moverArriba();
                }else {
                    if (this.cursors.down.isDown) {
                        this.player.moverAbajo();
                    } else {
                        if(!this.player.anims.isPlaying){
                            this.player.setVelocityX(1.2);
                            this.player.setVelocityY(1.2);
                        }
                    }
                }
            }
        }
    }

    LLegaste()
    {
        this.physics.pause();
        this.TimeEvent.paused = true;
        this.musica.stop();
        this.scene.start("pantalla-perdiste")
    }
    
}