import Phaser, { Tilemaps } from 'phaser'
import Personaje from '../clases/Personaje';
import GoblinsLab from '../clases/GoblinsLab';




export default class PantallaLaberinto1 extends Phaser.Scene {

    player;
    TiempoInicial;
    TimeEvent;
    timeText;
    musica;
    cursors;
    
    constructor() {
        super('pantalla-laberinto1')

    }

    preload() 
    {
        this.load.audio("JuegoM", "mussic/JuegoLab.wav");
        //CAMBIOS MAPA
        this.load.image("paredes", "assets/Mapas/Tiles/muros.png");
        this.load.image("suelos", "assets/Mapas/Tiles/PISITOSDEMAPA.png");
        this.load.tilemapTiledJSON("MapaFinal", "assets/Mapas/MapasParaFinal7.json");
        //PERSONAJE
        this.load.spritesheet("caballeror", "assets/Objetos/caballerorun.png",{frameWidth: 16,frameHeight: 16});
        //ENEMIGOS
        this.load.spritesheet("g", "assets/Objetos/goblins.png", {frameWidth: 16,frameHeight: 16});

    }

    create() 
    {

        const anchoMapaTiles = 150; // Ancho del mapa en unidades de mosaico en Tiled
        const altoMapaTiles = 71; // Alto del mapa en unidades de mosaico en Tiled
        const tamanoMosaico = 16; // Tamaño de cada mosaico en píxeles
        const anchoMapaPixeles = anchoMapaTiles * tamanoMosaico;
        const altoMapaPixeles = altoMapaTiles * tamanoMosaico;
        this.physics.world.setBounds(0, 0, anchoMapaPixeles, altoMapaPixeles);

        //TECLADO
        this.cursors = this.input.keyboard.createCursorKeys();
        console.log(this.cursors);

        //MAPA LABERINTOS
        const map1 = this.make.tilemap({ key: "MapaFinal" });

        const t2 = map1.addTilesetImage("PISOS", "suelos");
        const t1 = map1.addTilesetImage("PAREDES", "paredes");
       
        const piso1 = map1.createLayer("PISO1", t2, 0, 0);
        const per = map1.getObjectLayer("PERSONAJE");
        this.muro1 = map1.createLayer("PARED1", t1, 0, 0);
        const ene1 = map1.getObjectLayer("ENEVERT1");
        this.muro2 = map1.createLayer("PARED2", t1, 0, 0);
        const ene2 = map1.getObjectLayer("ENEVERT2");
        const ene3 = map1.getObjectLayer("ENEVERT2V")
        this.muro3 = map1.createLayer("PARED3", t1, 0, 0);
        const meta = map1.createLayer("LLEGADA", t1, 0, 0);
        const deco = map1.createLayer("DECO", t1, 0, 0);

        //Goblins
        const grupodeGoblins = this.add.group();
        ene1.objects.forEach(object => {
            const sgoblins = new GoblinsLab(this, object.x, object.y, 'g', 'tipo1', 'horizontal');
            grupodeGoblins.add(sgoblins);
            this.tweens.timeline({
                targets: sgoblins,
                loop: -1,
                tweens: [
                { x: object.x, duration: 3000, ease: 'Linear' },
                { x: object.x + 175, duration: 3000, ease: 'Linear' },
                { x: object.x, duration: 3000, ease: 'Linear' }
                ]
            });
        });

        const grupoGoblinsH = this.add.group();
        ene2.objects.forEach(object => {
            const sgoblins = new GoblinsLab(this, object.x, object.y, 'g', 'tipo2', 'horizontal');
            grupoGoblinsH.add(sgoblins);
            this.tweens.timeline({
                targets: sgoblins,
                loop: -1,
                tweens: [
                { x: object.x, duration: 3000, ease: 'Linear' },
                { x: object.x + 140, duration: 3000, ease: 'Linear' },
                { x: object.x, duration: 3000, ease: 'Linear' }
                ]
            });
        });

        const grupoGoblinsV = this.add.group();
        ene3.objects.forEach(object => {
            const sgoblins = new GoblinsLab(this, object.x, object.y, 'g', 'tipo3', 'vertical');
            grupoGoblinsV.add(sgoblins);
            this.tweens.timeline({
                targets: sgoblins,
                loop: -1,
                tweens: [
                { y: object.y, duration: 3000, ease: 'Linear' },
                { y: object.y + 70, duration: 3000, ease: 'Linear' },
                { y: object.y, duration: 3000, ease: 'Linear' }
                ]
            });
        });
        
        this.muro1.setCollisionByProperty({ collide: true});
        this.muro2.setCollisionByProperty({ collide: true });
        this.muro3.setCollisionByProperty({ collide: true }); 
        meta.setCollisionByProperty({ collide: true });
        deco.setCollisionByProperty({ collide: true });

        //PERSONAJE
        const PER1 = { x: 23, y: 1112 };
        this.player = new Personaje(this, PER1.x, PER1.y);
        this.physics.add.existing(this.player);

        //Capas
        this.player.setDepth(40);
        piso1.setDepth(1);
        this.muro1.setDepth(40);
        this.muro2.setDepth(40);
        this.muro3.setDepth(40);
        meta.setDepth(40);
        deco.setDepth(50);

        //Collisiones paredes
        this.physics.add.collider(this.player, this.muro1);
        this.physics.add.collider(this.player, this.muro2);
        this.physics.add.collider(this.player, this.muro3);
        this.physics.add.collider(this.muro2, grupoGoblinsH);
        //Collisiones con enemigos
        this.physics.add.collider(this.player, grupodeGoblins, this.onCollision, null, this);
        this.physics.add.collider(this.player, grupoGoblinsH, this.onCollision, null, this);
        this.physics.add.collider(this.player, grupoGoblinsV, this.onCollision, null, this);
        //Collisiones con la llegada
        this.physics.add.collider(this.player, meta, this.LLegaste, null, this);

        this.cameras.main.startFollow(this.player);
        this.cameras.main.setZoom(3.5);
        this.cameras.main.setBounds(0, 0, anchoMapaPixeles, altoMapaPixeles);

        //SONIDO
        //this.musica = this.sound.add('Terror',{loop: true});
        //this.musica.play();

    }

    update() 
    {

        if (this.input.keyboard.checkDown(this.cursors.left))
        {
            this.player.moverIzquierda();
            this.player.setOffset(15, 1);
        }
        else if (this.input.keyboard.checkDown(this.cursors.right))
        {
            this.player.moverDerecha();
            this.player.setOffset(2, 1);
        }else 
        {
            this.player.setVelocityX(0);
        }
        if (this.input.keyboard.checkDown(this.cursors.up))
        {
            this.player.moverArriba();
        }
        else if (this.input.keyboard.checkDown(this.cursors.down))
        {
            this.player.moverAbajo();
        }else 
        {
            this.player.setVelocityY(0);
        }
        
    }

    onCollision(player, grupodeGoblins ) {
        player.x = 23;
        player.y = 1112;
    }

    LLegaste()
    {
        this.physics.pause();
        //this.musica.stop();
        this.scene.start("pantalla-perdiste")
    }
    
}