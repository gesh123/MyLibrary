
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClTournamentTemplateGetRegCountData } from "../data/ClTournamentTemplateGetRegCountData";



export class ClTournamentTemplateGetRegCountCommand extends AbstractPokerCommand {
	public static NAME = "ClTournamentTemplateGetRegCount";
	public static UID = 18441;
	
		public data: ClTournamentTemplateGetRegCountData;

	constructor() {
		super();
		this.init(4, 2057, ClTournamentTemplateGetRegCountCommand.NAME);
	}
}
