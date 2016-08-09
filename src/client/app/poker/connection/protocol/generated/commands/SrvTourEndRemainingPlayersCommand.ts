
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourEndRemainingPlayersData } from "../data/SrvTourEndRemainingPlayersData";



export class SrvTourEndRemainingPlayersCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourEndRemainingPlayers";
	public static UID = 12454;
	
		public data: SrvTourEndRemainingPlayersData;

	constructor() {
		super();
		this.init(3, 166, SrvTourEndRemainingPlayersCommand.NAME);
	}
}
