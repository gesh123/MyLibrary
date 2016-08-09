
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateMinPlayersToStartData } from "../data/SrvUpdateMinPlayersToStartData";



export class SrvUpdateMinPlayersToStartCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateMinPlayersToStart";
	public static UID = 12413;
	
		public data: SrvUpdateMinPlayersToStartData;

	constructor() {
		super();
		this.init(3, 125, SrvUpdateMinPlayersToStartCommand.NAME);
	}
}
