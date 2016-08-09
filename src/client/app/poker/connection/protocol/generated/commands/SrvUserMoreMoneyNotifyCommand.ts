
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUserMoreMoneyNotifyData } from "../data/SrvUserMoreMoneyNotifyData";



export class SrvUserMoreMoneyNotifyCommand extends AbstractPokerCommand {
	public static NAME = "SrvUserMoreMoneyNotify";
	public static UID = 4245;
	
		public data: SrvUserMoreMoneyNotifyData;

	constructor() {
		super();
		this.init(1, 149, SrvUserMoreMoneyNotifyCommand.NAME);
	}
}
