
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class SrvTourPrizeDistributionStartedCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourPrizeDistributionStarted";
	public static UID = 12534;
	
	constructor() {
		super();
		this.init(3, 246, SrvTourPrizeDistributionStartedCommand.NAME);
	}
}
