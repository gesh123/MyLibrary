
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvStartRebuyGracePeriodData } from "../data/SrvStartRebuyGracePeriodData";



export class SrvStartRebuyGracePeriodCommand extends AbstractPokerCommand {
	public static NAME = "SrvStartRebuyGracePeriod";
	public static UID = 12470;
	
		public data: SrvStartRebuyGracePeriodData;

	constructor() {
		super();
		this.init(3, 182, SrvStartRebuyGracePeriodCommand.NAME);
	}
}
