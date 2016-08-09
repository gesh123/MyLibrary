
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSubscribeForTournamentTemplateDetailsInfoData } from "../data/ClSubscribeForTournamentTemplateDetailsInfoData";



export class ClSubscribeForTournamentTemplateDetailsInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClSubscribeForTournamentTemplateDetailsInfo";
	public static UID = 18438;
	
		public data: ClSubscribeForTournamentTemplateDetailsInfoData;

	constructor() {
		super();
		this.init(4, 2054, ClSubscribeForTournamentTemplateDetailsInfoCommand.NAME);
	}
}
