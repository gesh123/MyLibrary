
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvGetExtraMoneyReplyData } from "../data/SrvGetExtraMoneyReplyData";



export class SrvGetExtraMoneyReplyCommand extends AbstractPokerCommand {
	public static NAME = "SrvGetExtraMoneyReply";
	public static UID = 12415;
	
		public data: SrvGetExtraMoneyReplyData;

	constructor() {
		super();
		this.init(3, 127, SrvGetExtraMoneyReplyCommand.NAME);
	}
}
