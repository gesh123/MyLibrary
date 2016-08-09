
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClAddGlobalWaitListData } from "../data/ClAddGlobalWaitListData";



export class ClAddGlobalWaitListCommand extends AbstractPokerCommand {
	public static NAME = "ClAddGlobalWaitList";
	public static UID = 10251;
	
		public data: ClAddGlobalWaitListData;

	constructor() {
		super();
		this.init(2, 2059, ClAddGlobalWaitListCommand.NAME);
	}
}
