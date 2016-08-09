
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSubscribeForPlayerTournamentViewData } from "../data/ClSubscribeForPlayerTournamentViewData";



export class ClSubscribeForPlayerTournamentViewCommand extends AbstractPokerCommand {
	public static NAME = "ClSubscribeForPlayerTournamentView";
	public static UID = 18489;
	
		public data: ClSubscribeForPlayerTournamentViewData;

	constructor() {
		super();
		this.init(4, 2105, ClSubscribeForPlayerTournamentViewCommand.NAME);
	}
}
