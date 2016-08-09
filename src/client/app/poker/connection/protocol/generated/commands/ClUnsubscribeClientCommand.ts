
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClUnsubscribeClientData } from "../data/ClUnsubscribeClientData";



export class ClUnsubscribeClientCommand extends AbstractPokerCommand {
	public static NAME = "ClUnsubscribeClient";
	public static UID = 18450;
	
		public data: ClUnsubscribeClientData;

	constructor() {
		super();
		this.init(4, 2066, ClUnsubscribeClientCommand.NAME);
	}
}
