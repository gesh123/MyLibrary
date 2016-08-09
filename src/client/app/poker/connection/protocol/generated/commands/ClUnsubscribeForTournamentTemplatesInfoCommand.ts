
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClUnsubscribeForTournamentTemplatesInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClUnsubscribeForTournamentTemplatesInfo";
	public static UID = 18437;
	
	constructor() {
		super();
		this.init(4, 2053, ClUnsubscribeForTournamentTemplatesInfoCommand.NAME);
	}
}
