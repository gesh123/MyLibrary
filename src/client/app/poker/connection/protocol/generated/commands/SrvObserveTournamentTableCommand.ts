
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvObserveTournamentTableData } from "../data/SrvObserveTournamentTableData";



export class SrvObserveTournamentTableCommand extends AbstractPokerCommand {
	public static NAME = "SrvObserveTournamentTable";
	public static UID = 12518;
	
		public data: SrvObserveTournamentTableData;

	constructor() {
		super();
		this.init(3, 230, SrvObserveTournamentTableCommand.NAME);
	}
}
