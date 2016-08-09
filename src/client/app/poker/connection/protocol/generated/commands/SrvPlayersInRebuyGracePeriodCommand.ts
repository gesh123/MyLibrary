
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayersInRebuyGracePeriodData } from "../data/SrvPlayersInRebuyGracePeriodData";



export class SrvPlayersInRebuyGracePeriodCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayersInRebuyGracePeriod";
	public static UID = 12471;
	
		public data: SrvPlayersInRebuyGracePeriodData;

	constructor() {
		super();
		this.init(3, 183, SrvPlayersInRebuyGracePeriodCommand.NAME);
	}
}
