
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClSubscribeForSnGBeastJackpotCommand extends AbstractPokerCommand {
	public static NAME = "ClSubscribeForSnGBeastJackpot";
	public static UID = 18479;
	
	constructor() {
		super();
		this.init(4, 2095, ClSubscribeForSnGBeastJackpotCommand.NAME);
	}
}
