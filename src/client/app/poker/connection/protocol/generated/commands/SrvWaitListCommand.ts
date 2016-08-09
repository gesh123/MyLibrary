
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvWaitListData } from "../data/SrvWaitListData";



export class SrvWaitListCommand extends AbstractPokerCommand {
	public static NAME = "SrvWaitList";
	public static UID = 4139;
	
		public data: SrvWaitListData;

	constructor() {
		super();
		this.init(1, 43, SrvWaitListCommand.NAME);
	}
}
