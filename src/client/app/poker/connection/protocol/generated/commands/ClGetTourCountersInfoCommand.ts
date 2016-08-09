
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClGetTourCountersInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetTourCountersInfo";
	public static UID = 18433;
	
	constructor() {
		super();
		this.init(4, 2049, ClGetTourCountersInfoCommand.NAME);
	}
}
