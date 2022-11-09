import Phaser from 'phaser'

import PantallaMenu from './scenes/PantallaMenu'
import PantallaAjustes from './scenes/PantallaAjustes'
import PantallaParque from './scenes/PantallaParque'
import PantallaGanarPerder from './scenes/PantallaGanarPerder'
import PantallaLaberinto1 from './scenes/PantallaLaberinto1'
import PantallaLaberinto2 from './scenes/PantallaLaberinto2'
import PantallaLaberinto3 from './scenes/PantallaLaberinto3'
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
	scene: [PantallaMenu, PantallaAjustes, PantallaParque, PantallaLaberinto1, 
		PantallaLaberinto2, PantallaLaberinto3, ClasePerdiste ,PantallaGanarPerder]
}

export default new Phaser.Game(config)
window.focus();
