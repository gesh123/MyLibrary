
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvNewTourTablesData } from "../data/SrvNewTourTablesData";



export class SrvNewTourTablesCommand extends AbstractPokerCommand {
	public static NAME = "SrvNewTourTables";
	public static UID = 12408;
	
		public data: SrvNewTourTablesData;

	constructor() {
		super();
		this.init(3, 120, SrvNewTourTablesCommand.NAME);
	}
}
