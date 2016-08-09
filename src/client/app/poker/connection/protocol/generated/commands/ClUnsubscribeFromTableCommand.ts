
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClUnsubscribeFromTableData } from "../data/ClUnsubscribeFromTableData";



export class ClUnsubscribeFromTableCommand extends AbstractPokerCommand {
	public static NAME = "ClUnsubscribeFromTable";
	public static UID = 18478;
	
		public data: ClUnsubscribeFromTableData;

	constructor() {
		super();
		this.init(4, 2094, ClUnsubscribeFromTableCommand.NAME);
	}
}
