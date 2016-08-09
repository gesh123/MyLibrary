
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTournamentRemovedData } from "../data/SrvTournamentRemovedData";



export class SrvTournamentRemovedCommand extends AbstractPokerCommand {
	public static NAME = "SrvTournamentRemoved";
	public static UID = 12497;
	
		public data: SrvTournamentRemovedData;

	constructor() {
		super();
		this.init(3, 209, SrvTournamentRemovedCommand.NAME);
	}
}
