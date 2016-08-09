
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClUnsubscribeFromSnGBeastJackpotCommand extends AbstractPokerCommand {
	public static NAME = "ClUnsubscribeFromSnGBeastJackpot";
	public static UID = 18480;
	
	constructor() {
		super();
		this.init(4, 2096, ClUnsubscribeFromSnGBeastJackpotCommand.NAME);
	}
}
