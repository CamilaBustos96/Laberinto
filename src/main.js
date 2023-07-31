import Phaser from 'phaser'

import PantallaMenu from './scenes/PantallaMenu'
import PantallaAjustes from './scenes/PantallaAjustes'
import PantallaLaberinto1 from './scenes/PantallaLaberinto1'
import ClasePerdiste from './scenes/Perdiste'



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
			gravity: { y: 0 },
			debug: false,
		}
	},
	audio: {
        disableWebAudio: true
    },
	scene: [PantallaMenu, PantallaAjustes, PantallaLaberinto1, ClasePerdiste]
}

export default new Phaser.Game(config)
window.focus();
