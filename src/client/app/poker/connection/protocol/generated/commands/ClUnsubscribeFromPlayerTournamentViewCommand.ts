
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClUnsubscribeFromPlayerTournamentViewData } from "../data/ClUnsubscribeFromPlayerTournamentViewData";



export class ClUnsubscribeFromPlayerTournamentViewCommand extends AbstractPokerCommand {
	public static NAME = "ClUnsubscribeFromPlayerTournamentView";
	public static UID = 18490;
	
		public data: ClUnsubscribeFromPlayerTournamentViewData;

	constructor() {
		super();
		this.init(4, 2106, ClUnsubscribeFromPlayerTournamentViewCommand.NAME);
	}
}
