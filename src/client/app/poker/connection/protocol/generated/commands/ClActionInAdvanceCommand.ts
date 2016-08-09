
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClActionInAdvanceData } from "../data/ClActionInAdvanceData";



export class ClActionInAdvanceCommand extends AbstractPokerCommand {
	public static NAME = "ClActionInAdvance";
	public static UID = 10271;
	
		public data: ClActionInAdvanceData;

	constructor() {
		super();
		this.init(2, 2079, ClActionInAdvanceCommand.NAME);
	}
}
