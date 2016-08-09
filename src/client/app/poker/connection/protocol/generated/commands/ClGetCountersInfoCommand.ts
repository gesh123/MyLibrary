
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClGetCountersInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetCountersInfo";
	public static UID = 10246;
	
	constructor() {
		super();
		this.init(2, 2054, ClGetCountersInfoCommand.NAME);
	}
}
