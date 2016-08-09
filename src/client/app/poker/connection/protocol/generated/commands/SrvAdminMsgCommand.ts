
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvAdminMsgData } from "../data/SrvAdminMsgData";



export class SrvAdminMsgCommand extends AbstractPokerCommand {
	public static NAME = "SrvAdminMsg";
	public static UID = 4138;
	
		public data: SrvAdminMsgData;

	constructor() {
		super();
		this.init(1, 42, SrvAdminMsgCommand.NAME);
	}
}
