
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourPrizeNegoInProgressData } from "../data/SrvJackpotTourPrizeNegoInProgressData";



export class SrvJackpotTourPrizeNegoInProgressCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourPrizeNegoInProgress";
	public static UID = 12508;
	
		public data: SrvJackpotTourPrizeNegoInProgressData;

	constructor() {
		super();
		this.init(3, 220, SrvJackpotTourPrizeNegoInProgressCommand.NAME);
	}
}
