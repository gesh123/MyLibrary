
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvNotifyForAddonInGracePeriodData } from "../data/SrvNotifyForAddonInGracePeriodData";



export class SrvNotifyForAddonInGracePeriodCommand extends AbstractPokerCommand {
	public static NAME = "SrvNotifyForAddonInGracePeriod";
	public static UID = 12495;
	
		public data: SrvNotifyForAddonInGracePeriodData;

	constructor() {
		super();
		this.init(3, 207, SrvNotifyForAddonInGracePeriodCommand.NAME);
	}
}
