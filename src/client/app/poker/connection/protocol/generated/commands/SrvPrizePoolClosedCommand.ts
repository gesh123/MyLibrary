
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class SrvPrizePoolClosedCommand extends AbstractPokerCommand {
	public static NAME = "SrvPrizePoolClosed";
	public static UID = 4212;
	
	constructor() {
		super();
		this.init(1, 116, SrvPrizePoolClosedCommand.NAME);
	}
}
