
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClSubscribeForJackpotsCommand extends AbstractPokerCommand {
	public static NAME = "ClSubscribeForJackpots";
	public static UID = 10282;
	
	constructor() {
		super();
		this.init(2, 2090, ClSubscribeForJackpotsCommand.NAME);
	}
}
