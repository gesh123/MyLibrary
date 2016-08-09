
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClChatMsgData } from "../data/ClChatMsgData";



export class ClChatMsgCommand extends AbstractPokerCommand {
	public static NAME = "ClChatMsg";
	public static UID = 10248;
	
		public data: ClChatMsgData;

	constructor() {
		super();
		this.init(2, 2056, ClChatMsgCommand.NAME);
	}
}
