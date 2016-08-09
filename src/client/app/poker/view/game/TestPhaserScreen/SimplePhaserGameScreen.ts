import {Component} from "@angular/core";
import {DevConsole} from "../../../devTools/console/DevConsole";

/**
 * This class represents the lazy loaded SimpleGameComponent.
 */
@Component({
	moduleId: module.id,
	selector: 'SimplePhaserGameScreen',
	templateUrl: 'SimplePhaserGameScreen.html',
})

export class SimplePhaserGameScreen
{
	private game:Phaser.Game;

	constructor()
	{

		this.game = new Phaser.Game(
			800,
			600,
			Phaser.AUTO,
			'simplegame-content',
			this,
			false,
			true);

	}

	private preload():void
	{
		this.game.load.image('logo', './assets/phaser/phaser2.png');
		this.game.load.spritesheet('button', 'assets/phaser/button_sprite_sheet.png', 193, 71);
	}

	private create():void
	{
		let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);

		this.game.add.button(this.game.world.centerX - 130, 50, "button", this.buttonClick, this );
	}

	private buttonClick():void
	{
		DevConsole.log("SimplePhaserGameComponent.buttonClick", "Phaser Button Clicked !!!");

		let sprite = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, "logo");
		let scaleFactor = (Math.random()*100)/100;
		sprite.scale.set(scaleFactor,scaleFactor);
	}
}
