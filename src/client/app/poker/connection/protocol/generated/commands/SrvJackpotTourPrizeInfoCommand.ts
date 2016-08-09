
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourPrizeInfoData } from "../data/SrvJackpotTourPrizeInfoData";



export class SrvJackpotTourPrizeInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourPrizeInfo";
	public static UID = 12516;
	
		public data: SrvJackpotTourPrizeInfoData;

	constructor() {
		super();
		this.init(3, 228, SrvJackpotTourPrizeInfoCommand.NAME);
	}
}
