
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClUnsubscribeFromQualifiersData } from "../data/ClUnsubscribeFromQualifiersData";



export class ClUnsubscribeFromQualifiersCommand extends AbstractPokerCommand {
	public static NAME = "ClUnsubscribeFromQualifiers";
	public static UID = 18445;
	
		public data: ClUnsubscribeFromQualifiersData;

	constructor() {
		super();
		this.init(4, 2061, ClUnsubscribeFromQualifiersCommand.NAME);
	}
}
