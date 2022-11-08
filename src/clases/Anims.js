
//  export class Anims {
//     constructor(scene){
//         if(!scene) return;

//         this.scene = scene;
//     }

//     preload(){
//         this.scene.load.atlas("Leah", "assets/Mapas/Objetos/Leah-sprite.png", "assets/Mapa/Objetos/Leah-sprite.json");
//     }

//     create(){
//         const anims = this.scene.anims;

// 		anims.create({
// 			key: "Leah-up",
// 			frames: anims.generateFrameNames("Leah", { start: 8, end: 11}),
// 			frameRate: 5,
// 			repeat: -1
// 		});

// 		anims.create({
// 			key: "Leah-down",
// 			frames: anims.generateFrameNames("Leah", { start: 0, end: 3}),
// 			frameRate: 5,
// 			repeat: -1
// 		});

// 		anims.create({
// 			key: "Leah-left",
// 			frames: anims.generateFrameNames("Leah", { start: 12, end: 15}),
// 			frameRate: 5,
// 			repeat: -1
// 		});

// 		anims.create({
// 			key: "Leah-right",
// 			frames: anims.generateFrameNames("Leah", { start: 4, end: 7}),
// 			frameRate: 5,
// 			repeat: -1
// 		});

//         anims.create({
// 			key: "Leah-idle",
// 			frames: anims.generateFrameNames("Leah", { start: 4, end: 4}),
// 			frameRate: 5,
// 			repeat: -1
// 		});
//     }
// }