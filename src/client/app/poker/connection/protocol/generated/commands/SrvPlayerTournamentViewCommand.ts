
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerTournamentViewData } from "../data/SrvPlayerTournamentViewData";



export class SrvPlayerTournamentViewCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerTournamentView";
	public static UID = 12527;
	
		public data: SrvPlayerTournamentViewData;

	constructor() {
		super();
		this.init(3, 239, SrvPlayerTournamentViewCommand.NAME);
	}
}
