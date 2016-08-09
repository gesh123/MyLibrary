
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClObserveTournamentTemplateTableData } from "../data/ClObserveTournamentTemplateTableData";



export class ClObserveTournamentTemplateTableCommand extends AbstractPokerCommand {
	public static NAME = "ClObserveTournamentTemplateTable";
	public static UID = 18440;
	
		public data: ClObserveTournamentTemplateTableData;

	constructor() {
		super();
		this.init(4, 2056, ClObserveTournamentTemplateTableCommand.NAME);
	}
}
