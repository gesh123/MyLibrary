
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateTablesData } from "../data/SrvUpdateTablesData";



export class SrvUpdateTablesCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateTables";
	public static UID = 12409;
	
		public data: SrvUpdateTablesData;

	constructor() {
		super();
		this.init(3, 121, SrvUpdateTablesCommand.NAME);
	}
}
