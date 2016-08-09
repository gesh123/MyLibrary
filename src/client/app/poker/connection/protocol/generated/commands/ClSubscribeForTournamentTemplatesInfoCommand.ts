
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSubscribeForTournamentTemplatesInfoData } from "../data/ClSubscribeForTournamentTemplatesInfoData";



export class ClSubscribeForTournamentTemplatesInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClSubscribeForTournamentTemplatesInfo";
	public static UID = 18436;
	
		public data: ClSubscribeForTournamentTemplatesInfoData;

	constructor() {
		super();
		this.init(4, 2052, ClSubscribeForTournamentTemplatesInfoCommand.NAME);
	}
}
