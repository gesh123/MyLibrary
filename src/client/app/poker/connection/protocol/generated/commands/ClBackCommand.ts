
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClBackCommand extends AbstractPokerCommand {
	public static NAME = "ClBack";
	public static UID = 10269;
	
	constructor() {
		super();
		this.init(2, 2077, ClBackCommand.NAME);
	}
}
