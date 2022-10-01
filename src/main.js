import Phaser from 'phaser'

import PantallaMenu from './scenes/PantallaMenu'
import PantallaAjustes from './scenes/PantallaAjustes'
import PantallaParque from './scenes/PantallaParque'
import PantallaGanarPerder from './scenes/PantallaGanarPerder'
import ClasePersonaje from './clases/Personaje'
import ClaseDificultad from './clases/Dificultad'
import PantallaLaberintos from './scenes/PantallaLaberintos'
import ClasePop from './clases/PopUp'
import ClaseInter from './clases/UI-gameplay'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		min: {
			width: 1300,
			height: 270,
		},
		max: {
			width: 1600,
			height: 1200,
		},
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: false,
		}
	},
	scene: [PantallaMenu, PantallaAjustes, PantallaParque, PantallaLaberintos,
		 PantallaGanarPerder, ClasePersonaje, ClaseDificultad, ClasePop, ClaseInter]
}

export default new Phaser.Game(config)
