
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUserStateOnTableData } from "../data/SrvUserStateOnTableData";



export class SrvUserStateOnTableCommand extends AbstractPokerCommand {
	public static NAME = "SrvUserStateOnTable";
	public static UID = 4170;
	
		public data: SrvUserStateOnTableData;

	constructor() {
		super();
		this.init(1, 74, SrvUserStateOnTableCommand.NAME);
	}
}
