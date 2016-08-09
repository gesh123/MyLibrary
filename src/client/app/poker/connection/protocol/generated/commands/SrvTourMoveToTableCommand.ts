
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourMoveToTableData } from "../data/SrvTourMoveToTableData";



export class SrvTourMoveToTableCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourMoveToTable";
	public static UID = 12406;
	
		public data: SrvTourMoveToTableData;

	constructor() {
		super();
		this.init(3, 118, SrvTourMoveToTableCommand.NAME);
	}
}
