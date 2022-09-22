import Phaser from 'phaser'

import PantallaMenu from './scenes/PantallaMenu'
import PantallaAjustes from './scenes/PantallaAjustes'
import PantallaParque from './scenes/PantallaParque'
import PantallaLaberintoUno from './scenes/PantallaLaberintoUno'
import PantallaLaberintoDos from './scenes/PantallaLaberintoDos'
import PantallaLaberintoTres from './scenes/PantallaLaberintoTres'
import PantallaGanarPerder from './scenes/PantallaGanarPerder'

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
	scene: [PantallaMenu, PantallaAjustes, PantallaParque, PantallaLaberintoUno, 
		PantallaLaberintoDos, PantallaLaberintoTres, PantallaGanarPerder]
}

export default new Phaser.Game(config)
