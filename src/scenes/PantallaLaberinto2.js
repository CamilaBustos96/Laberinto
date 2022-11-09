import Phaser, { Tilemaps } from 'phaser'
import Personaje from '../clases/Personaje'

export default class PantallaLaberinto2 extends Phaser.Scene
{
    player;
    cursors;

	constructor()
	{
		super('pantalla-laberinto2')
        
	}

	preload()
    {
        //AUDIO
        this.load.audio("Dun", ["mussic/dungeon2.ogg", "mussic/dungeon1.mp3"]);
        //IMAGENES
        this.load.image("alfombra", "assets/Mapas/Tiles/Stardew-Festivales.png")
        this.load.image("paredes", "assets/Mapas/Tiles/Stardew-Mazmo1.png")
        this.load.image("suelo", "assets/Mapas/Tiles/Stardew-Suelos.png")
        //MAPA
        this.load.tilemapTiledJSON("label2", "assets/Mapas/LaberintoOscuro.json")
        //PERSONAJE
        this.load.spritesheet("Lea", "assets/Objetos/spriteLeah.png", { frameWidth: 16, frameHeight: 30.5 }); 

    }

    create()
    {
        //TECLADO
        this.cursors = this.input.keyboard.createCursorKeys();

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
        const objeto1 = map2.getObjectLayer("Persona");
        const paredH2 = map2.createLayer("ParedHorizontal2", tileset2, 0, 0);
        const paredH3 = map2.createLayer("ParedHorizontal3", tileset2, 0, 0);
        const paredV1 = map2.createLayer("ParedVertical", tileset2, 0, 0);
        const osc = map2.createLayer("Oscuridad", tileset2, 0, 0);
        
        //INTERACCION
        paredH2.setCollisionByProperty({ Collider: true });
        paredV1.setCollisionByProperty({ Collider: true });
        portal.setCollisionByProperty({ Collider: true });
        
        //CREACION DE PERSONAJE
        this.player = new Personaje(this, objeto1.objects[0].x, objeto1.objects[0].y);
        //console.log("🚀 ~ file: PantallaLaberinto2.js ~ line 55 ~ objeto1", objeto1);

        //CAPAS
        this.player.setDepth(20);
        paredH3.setDepth(25);
        paredV1.setDepth(20);
        paredH1.setDepth(10);
        osc.setDepth(30);

        //COLLIDE
        this.physics.add.collider(this.player, paredH2);
        this.physics.add.collider(this.player, paredV1);
        this.physics.add.collider(this.player, portal, this.LLegaste, null, this);

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
        this.musica = this.sound.add('Dun',{loop: true});
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

    update(){
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