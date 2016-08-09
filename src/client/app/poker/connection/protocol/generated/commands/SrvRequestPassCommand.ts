
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class SrvRequestPassCommand extends AbstractPokerCommand {
	public static NAME = "SrvRequestPass";
	public static UID = 4226;
	
	constructor() {
		super();
		this.init(1, 130, SrvRequestPassCommand.NAME);
	}
}
