
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClGetSyncBreakInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetSyncBreakInfo";
	public static UID = 18472;
	
	constructor() {
		super();
		this.init(4, 2088, ClGetSyncBreakInfoCommand.NAME);
	}
}
