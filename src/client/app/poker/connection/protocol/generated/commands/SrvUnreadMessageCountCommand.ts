
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUnreadMessageCountData } from "../data/SrvUnreadMessageCountData";



export class SrvUnreadMessageCountCommand extends AbstractPokerCommand {
	public static NAME = "SrvUnreadMessageCount";
	public static UID = 4259;
	
		public data: SrvUnreadMessageCountData;

	constructor() {
		super();
		this.init(1, 163, SrvUnreadMessageCountCommand.NAME);
	}
}
