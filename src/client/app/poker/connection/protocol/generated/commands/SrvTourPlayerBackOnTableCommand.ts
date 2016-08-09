
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourPlayerBackOnTableData } from "../data/SrvTourPlayerBackOnTableData";



export class SrvTourPlayerBackOnTableCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourPlayerBackOnTable";
	public static UID = 12441;
	
		public data: SrvTourPlayerBackOnTableData;

	constructor() {
		super();
		this.init(3, 153, SrvTourPlayerBackOnTableCommand.NAME);
	}
}
