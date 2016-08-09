
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUserActionNotifyData } from "../data/SrvUserActionNotifyData";



export class SrvUserActionNotifyCommand extends AbstractPokerCommand {
	public static NAME = "SrvUserActionNotify";
	public static UID = 4177;
	
		public data: SrvUserActionNotifyData;

	constructor() {
		super();
		this.init(1, 81, SrvUserActionNotifyCommand.NAME);
	}
}
