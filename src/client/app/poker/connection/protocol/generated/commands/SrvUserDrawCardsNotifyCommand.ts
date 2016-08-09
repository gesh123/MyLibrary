
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUserDrawCardsNotifyData } from "../data/SrvUserDrawCardsNotifyData";



export class SrvUserDrawCardsNotifyCommand extends AbstractPokerCommand {
	public static NAME = "SrvUserDrawCardsNotify";
	public static UID = 4248;
	
		public data: SrvUserDrawCardsNotifyData;

	constructor() {
		super();
		this.init(1, 152, SrvUserDrawCardsNotifyCommand.NAME);
	}
}
