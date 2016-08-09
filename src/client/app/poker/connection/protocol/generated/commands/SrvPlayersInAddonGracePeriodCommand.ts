
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayersInAddonGracePeriodData } from "../data/SrvPlayersInAddonGracePeriodData";



export class SrvPlayersInAddonGracePeriodCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayersInAddonGracePeriod";
	public static UID = 12493;
	
		public data: SrvPlayersInAddonGracePeriodData;

	constructor() {
		super();
		this.init(3, 205, SrvPlayersInAddonGracePeriodCommand.NAME);
	}
}
