
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClRemoveFromWaitListData } from "../data/ClRemoveFromWaitListData";



export class ClRemoveFromWaitListCommand extends AbstractPokerCommand {
	public static NAME = "ClRemoveFromWaitList";
	public static UID = 10253;
	
		public data: ClRemoveFromWaitListData;

	constructor() {
		super();
		this.init(2, 2061, ClRemoveFromWaitListCommand.NAME);
	}
}
