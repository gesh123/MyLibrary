
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSubscribeForTableData } from "../data/ClSubscribeForTableData";



export class ClSubscribeForTableCommand extends AbstractPokerCommand {
	public static NAME = "ClSubscribeForTable";
	public static UID = 18461;
	
		public data: ClSubscribeForTableData;

	constructor() {
		super();
		this.init(4, 2077, ClSubscribeForTableCommand.NAME);
	}
}
