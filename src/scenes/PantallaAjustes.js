import Phaser, { Sound } from 'phaser'
import { en_UK, es_AR, pt_BR } from '../enums/lenguaje'
import { FETCHED, FETCHING, READY, TODO } from '../enums/status'
import { getTranslations, getPhrase ,getLanguageConfig} from '../servicio/translation'
import key from '../enums/key'

export default class PantallaAjustes extends Phaser.Scene
{   
    
	constructor()
	{
		super('pantalla-ajustes')
        this.currentLanguage = 'es_AR';
	}

   

	preload()
    {

        this.load.image("Fondo", "assets/Interfases/Pantallas/LAB2.png")
        this.load.image("BotonX", "assets/Interfases/Botones/Icon_Close2.png")
        this.load.image("España", "assets/Interfases/Botones/spainflag.png")
        this.load.image("Brasil", "assets/Interfases/Botones/brflag.png")
        this.load.image("Usa", "assets/Interfases/Botones/usaflag.png")
        this.load.image("Si", "assets/Interfases/Botones/Icon_SoundOnGreen.png")
        this.load.image("No", "assets/Interfases/Botones/Icon_SoundMutedRed.png")
    }

    create()
    {
        
        //FONDO
        this.add.image(0, 0, 'Fondo').setOrigin(0, 0).setScale(0.45, 0.6)

        //BOTONES
        var botonvolver = this.add.image(760, 10, "BotonX" ).setOrigin(0, 0).setScale(0.5, 0.8)
        botonvolver.setInteractive()
        botonvolver.on("pointerdown", () => this.scene.start('pantalla-menu') );

        //IDIOMAS FUTUROS
        var buttonPortuguese = this.add.image(430, 350, "Brasil" ).setOrigin(0, 0).setScale(0.1, 0.15)
        buttonPortuguese.setInteractive()
        buttonPortuguese.on('pointerdown', () => this.changeLanguage("pt_BR"));

        var buttonEnglish = this.add.image(500, 350, "Usa" ).setOrigin(0, 0).setScale(0.1, 0.15)
        buttonEnglish.setInteractive()
        buttonEnglish.on('pointerdown', () => this.changeLanguage("en_UK"));

        var buttonSpanish = this.add.image(360, 350, "España" ).setOrigin(0, 0).setScale(0.1, 0.15)
        buttonSpanish.setInteractive()
        buttonSpanish.on('pointerdown', () => this.changeLanguage("es_AR"));

        //SONIDO
        //this.ssi = this.add.image(390, 250, "Si" ).setOrigin(0, 0).setScale(0.6, 0.8)
        //this.no = this.add.image(460, 250, "No" ).setOrigin(0, 0).setScale(0.6, 0.8)

        const botonDetener = this.add.image(390, 250, 'No').setOrigin(0, 0).setScale(0.6, 0.8)
        botonDetener.setInteractive();
        botonDetener.on('pointerdown', () => {
            this.scene.get('pantalla-menu').sound.pauseAll();
        });

        // Botón para reanudar el audio
        const botonReanudar = this.add.image(460, 250, 'Si').setOrigin(0, 0).setScale(0.6, 0.8)
        botonReanudar.setInteractive();
        botonReanudar.on('pointerdown', () => {
            this.scene.get('pantalla-menu').sound.resumeAll();
        });

        // Actualiza los textos en función del idioma actual
        this.events.emit('languageChanged', this.currentLanguage)
        this.updateTexts();
        
    }

    updateTexts()
    {
        const translations =
        {
            es_AR: {
                Ajustes: 'AJUSTES',
                Sonido: 'SONIDO',
                Idioma: 'IDIOMA',
            },
            en_UK: {
                Ajustes: 'SETTINGS',
                Sonido: 'SOUND',
                Idioma: 'LANGUAGE',
            },
            pt_BR: {
                Ajustes: 'CONFIGURAÇÕES',
                Sonido: 'SOM',
                Idioma: 'LINGUAGEM',
            },
   
        };

        // Obtener los textos para el idioma actual
        const currentTranslations = translations[this.currentLanguage];

        // Eliminar textos anteriores (si los hay)
        if (this.Ajustes) this.Ajustes.destroy();
        if (this.Sonido) this.Sonido.destroy();
        if (this.Idioma) this.Idioma.destroy();

        // Mostrar los textos en la escena con las traducciones correspondientes
        this.Ajustes = this.add.text(70, 50, currentTranslations.Ajustes, { fontSize: '80px', color: 'black' });
        this.Sonido = this.add.text(100, 250, currentTranslations.Sonido, { fontSize: '50px', color: 'black' });
        this.Idioma = this.add.text(80, 350, currentTranslations.Idioma, { fontSize: '50px', color: 'black' });
      
    }

    changeLanguage(language) 
    {
        // Establecer el idioma seleccionado
        this.currentLanguage = language;

        this.events.emit('languageChanged', this.currentLanguage);

        // Actualizar los textos en función del nuevo idioma
        this.updateTexts();
    }
   

}