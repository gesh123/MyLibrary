
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourPrizeDistributionInfoData } from "../data/SrvJackpotTourPrizeDistributionInfoData";



export class SrvJackpotTourPrizeDistributionInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourPrizeDistributionInfo";
	public static UID = 12511;
	
		public data: SrvJackpotTourPrizeDistributionInfoData;

	constructor() {
		super();
		this.init(3, 223, SrvJackpotTourPrizeDistributionInfoCommand.NAME);
	}
}
