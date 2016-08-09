
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvNotifyForRebuyInGracePeriodData } from "../data/SrvNotifyForRebuyInGracePeriodData";



export class SrvNotifyForRebuyInGracePeriodCommand extends AbstractPokerCommand {
	public static NAME = "SrvNotifyForRebuyInGracePeriod";
	public static UID = 12473;
	
		public data: SrvNotifyForRebuyInGracePeriodData;

	constructor() {
		super();
		this.init(3, 185, SrvNotifyForRebuyInGracePeriodCommand.NAME);
	}
}
