
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourBuyInInfoData } from "../data/SrvJackpotTourBuyInInfoData";



export class SrvJackpotTourBuyInInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourBuyInInfo";
	public static UID = 12501;
	
		public data: SrvJackpotTourBuyInInfoData;

	constructor() {
		super();
		this.init(3, 213, SrvJackpotTourBuyInInfoCommand.NAME);
	}
}
