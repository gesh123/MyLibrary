
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvNewPlayerInAddonGracePeriodData } from "../data/SrvNewPlayerInAddonGracePeriodData";



export class SrvNewPlayerInAddonGracePeriodCommand extends AbstractPokerCommand {
	public static NAME = "SrvNewPlayerInAddonGracePeriod";
	public static UID = 12498;
	
		public data: SrvNewPlayerInAddonGracePeriodData;

	constructor() {
		super();
		this.init(3, 210, SrvNewPlayerInAddonGracePeriodCommand.NAME);
	}
}
