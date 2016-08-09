
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetTourPlayerTableData } from "../data/ClGetTourPlayerTableData";



export class ClGetTourPlayerTableCommand extends AbstractPokerCommand {
	public static NAME = "ClGetTourPlayerTable";
	public static UID = 18470;
	
		public data: ClGetTourPlayerTableData;

	constructor() {
		super();
		this.init(4, 2086, ClGetTourPlayerTableCommand.NAME);
	}
}
