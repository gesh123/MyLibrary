
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTournamentTemplatesInfoData } from "../data/SrvTournamentTemplatesInfoData";



export class SrvTournamentTemplatesInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTournamentTemplatesInfo";
	public static UID = 12395;
	
		public data: SrvTournamentTemplatesInfoData;

	constructor() {
		super();
		this.init(3, 107, SrvTournamentTemplatesInfoCommand.NAME);
	}
}
