
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourPlayerTableData } from "../data/SrvTourPlayerTableData";



export class SrvTourPlayerTableCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourPlayerTable";
	public static UID = 12466;
	
		public data: SrvTourPlayerTableData;

	constructor() {
		super();
		this.init(3, 178, SrvTourPlayerTableCommand.NAME);
	}
}
