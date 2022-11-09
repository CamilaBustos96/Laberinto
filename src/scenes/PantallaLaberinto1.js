import Phaser, { Tilemaps } from 'phaser'
import Personaje from '../clases/Personaje';


export default class PantallaLaberinto1 extends Phaser.Scene {
    player;
    TiempoInicial;
    TimeEvent;
    timeText;
    musica;
    constructor() {
        super('pantalla-laberinto1')

    }

    preload() {
        //MAPA
        this.load.image("festival", "assets/Mapas/Tiles/FestivalesStardew.png")
        this.load.image("cuevas", "assets/Mapas/Tiles/CuevasStardew.png")
        this.load.image("otoño", "assets/Mapas/Tiles/OtoñoStardew.png")
        this.load.tilemapTiledJSON("label1", "assets/Mapas/LaberintoTerror.json")
        this.load.audio("Terror", ["mussic/musicaterror2.ogg", "mussic/musicaterror1.mp3"] );

        //PERSONAJE
        this.load.spritesheet("Lea", "assets/Objetos/spriteLeah.png", { frameWidth: 16, frameHeight: 30.5 });
        this.load.spritesheet("Jugador", "assets/Objetos/dude.png", { frameWidth: 32, frameHeight: 48 });

    }

    create() {
        

        //TECLADO
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
        const portal = map1.createLayer("Portal", tileset1, 0, 0);

        phorizontal.setCollisionByProperty({ Collider: true });
        pvertical.setCollisionByProperty({ Collider: true });
        arbolt.setCollisionByProperty({ Collider: true });
        luminaria.setCollisionByProperty({ Collider: true });
        portal.setCollisionByProperty({ Collider: true });

        //PERSONAJE
        this.player = new Personaje(this, objeto1.objects[0].x, objeto1.objects[0].y);
        //console.log("🚀 ~ file: PantallaLaberinto1.js ~ line 55 ~ objeto1", objeto1);

        //Capas
        this.player.setDepth(20);
        phorizontal.setDepth(10);
        pvertical.setDepth(20);
        arbolc.setDepth(40);

        //Collisiones
        this.physics.add.collider(this.player, phorizontal);
        this.physics.add.collider(this.player, pvertical);
        this.physics.add.collider(this.player, portal, this.LLegaste, null, this);

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(2.5);

        //SONIDO
        this.musica = this.sound.add('Terror',{loop: true});
        this.musica.play();
        
        //TIEMPO
        this.TiempoInicial = 0;
        this.TimeEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this})
        this.timeText = this.add.text(200, 100, 'Tiempo: ', {fontFamily: 'Courier New', fontSize: '80px', color: "black"});
        this.timeText.setScrollFactor(0);
        this.timeText.setDepth(50);

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
                            this.player.setVelocityX(0);
                            this.player.setVelocityY(0);
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