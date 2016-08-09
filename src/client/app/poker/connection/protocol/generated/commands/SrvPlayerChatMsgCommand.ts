
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerChatMsgData } from "../data/SrvPlayerChatMsgData";



export class SrvPlayerChatMsgCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerChatMsg";
	public static UID = 4146;
	
		public data: SrvPlayerChatMsgData;

	constructor() {
		super();
		this.init(1, 50, SrvPlayerChatMsgCommand.NAME);
	}
}
