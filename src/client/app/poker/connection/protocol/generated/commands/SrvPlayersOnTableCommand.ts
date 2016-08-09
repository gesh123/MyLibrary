
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayersOnTableData } from "../data/SrvPlayersOnTableData";



export class SrvPlayersOnTableCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayersOnTable";
	public static UID = 12417;
	
		public data: SrvPlayersOnTableData;

	constructor() {
		super();
		this.init(3, 129, SrvPlayersOnTableCommand.NAME);
	}
}
