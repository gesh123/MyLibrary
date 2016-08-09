
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClUnsubscribeForTournamentTemplateDetailsInfoData } from "../data/ClUnsubscribeForTournamentTemplateDetailsInfoData";



export class ClUnsubscribeForTournamentTemplateDetailsInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClUnsubscribeForTournamentTemplateDetailsInfo";
	public static UID = 18439;
	
		public data: ClUnsubscribeForTournamentTemplateDetailsInfoData;

	constructor() {
		super();
		this.init(4, 2055, ClUnsubscribeForTournamentTemplateDetailsInfoCommand.NAME);
	}
}
