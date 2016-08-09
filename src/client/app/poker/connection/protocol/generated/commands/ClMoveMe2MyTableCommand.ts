
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClMoveMe2MyTableData } from "../data/ClMoveMe2MyTableData";



export class ClMoveMe2MyTableCommand extends AbstractPokerCommand {
	public static NAME = "ClMoveMe2MyTable";
	public static UID = 18454;
	
		public data: ClMoveMe2MyTableData;

	constructor() {
		super();
		this.init(4, 2070, ClMoveMe2MyTableCommand.NAME);
	}
}
