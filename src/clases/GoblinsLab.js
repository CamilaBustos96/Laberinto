import Phaser, { GameObjects } from 'phaser'

export default class GoblinsLab extends Phaser.GameObjects.Sprite 
{
    constructor(scene, x, y, texture, type, direction) 
    {
      super(scene, x, y, texture);
      scene.add.existing(this);
      scene.physics.world.enable(this);
  
      this.type = type;
      this.direction = direction;
  
      this.setScale(0.7);
      this.setOrigin(0, 1);
      this.setDepth(100);
  
      this.anims.create({
        key: 'caminata',
        frames: this.anims.generateFrameNumbers(texture, { start: 1, end: 6 }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.play('caminata', true);
    }
}
  
