
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClAddToWaitListData } from "../data/ClAddToWaitListData";



export class ClAddToWaitListCommand extends AbstractPokerCommand {
	public static NAME = "ClAddToWaitList";
	public static UID = 10249;
	
		public data: ClAddToWaitListData;

	constructor() {
		super();
		this.init(2, 2057, ClAddToWaitListCommand.NAME);
	}
}
