
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTournamentTemplateGetRegCountData } from "../data/SrvTournamentTemplateGetRegCountData";



export class SrvTournamentTemplateGetRegCountCommand extends AbstractPokerCommand {
	public static NAME = "SrvTournamentTemplateGetRegCount";
	public static UID = 12523;
	
		public data: SrvTournamentTemplateGetRegCountData;

	constructor() {
		super();
		this.init(3, 235, SrvTournamentTemplateGetRegCountCommand.NAME);
	}
}
