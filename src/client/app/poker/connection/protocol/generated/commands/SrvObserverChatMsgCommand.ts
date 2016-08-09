
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvObserverChatMsgData } from "../data/SrvObserverChatMsgData";



export class SrvObserverChatMsgCommand extends AbstractPokerCommand {
	public static NAME = "SrvObserverChatMsg";
	public static UID = 4148;
	
		public data: SrvObserverChatMsgData;

	constructor() {
		super();
		this.init(1, 52, SrvObserverChatMsgCommand.NAME);
	}
}
