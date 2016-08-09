
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClKeepAliveCommand extends AbstractPokerCommand {
	public static NAME = "ClKeepAlive";
	public static UID = 10274;
	
	constructor() {
		super();
		this.init(2, 2082, ClKeepAliveCommand.NAME);
	}
}
