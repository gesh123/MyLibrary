
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClNotifyLocaleIdChangeData } from "../data/ClNotifyLocaleIdChangeData";



export class ClNotifyLocaleIdChangeCommand extends AbstractPokerCommand {
	public static NAME = "ClNotifyLocaleIdChange";
	public static UID = 10301;
	
		public data: ClNotifyLocaleIdChangeData;

	constructor() {
		super();
		this.init(2, 2109, ClNotifyLocaleIdChangeCommand.NAME);
	}
}
