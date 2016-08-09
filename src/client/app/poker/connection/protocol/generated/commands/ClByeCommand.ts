
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClByeCommand extends AbstractPokerCommand {
	public static NAME = "ClBye";
	public static UID = 8197;
	
	constructor() {
		super();
		this.init(2, 5, ClByeCommand.NAME);
	}
}
