
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClUnsubscribeFromJackpotsCommand extends AbstractPokerCommand {
	public static NAME = "ClUnsubscribeFromJackpots";
	public static UID = 10283;
	
	constructor() {
		super();
		this.init(2, 2091, ClUnsubscribeFromJackpotsCommand.NAME);
	}
}
