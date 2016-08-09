
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvStartAddonGracePeriodData } from "../data/SrvStartAddonGracePeriodData";



export class SrvStartAddonGracePeriodCommand extends AbstractPokerCommand {
	public static NAME = "SrvStartAddonGracePeriod";
	public static UID = 12491;
	
		public data: SrvStartAddonGracePeriodData;

	constructor() {
		super();
		this.init(3, 203, SrvStartAddonGracePeriodCommand.NAME);
	}
}
