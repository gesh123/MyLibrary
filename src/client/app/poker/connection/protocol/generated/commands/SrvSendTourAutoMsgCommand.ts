
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvSendTourAutoMsgData } from "../data/SrvSendTourAutoMsgData";



export class SrvSendTourAutoMsgCommand extends AbstractPokerCommand {
	public static NAME = "SrvSendTourAutoMsg";
	public static UID = 12432;
	
		public data: SrvSendTourAutoMsgData;

	constructor() {
		super();
		this.init(3, 144, SrvSendTourAutoMsgCommand.NAME);
	}
}
