
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdatePlayersData } from "../data/SrvUpdatePlayersData";



export class SrvUpdatePlayersCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdatePlayers";
	public static UID = 12411;
	
		public data: SrvUpdatePlayersData;

	constructor() {
		super();
		this.init(3, 123, SrvUpdatePlayersCommand.NAME);
	}
}
