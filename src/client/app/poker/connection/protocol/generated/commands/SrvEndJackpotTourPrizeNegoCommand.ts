
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvEndJackpotTourPrizeNegoData } from "../data/SrvEndJackpotTourPrizeNegoData";



export class SrvEndJackpotTourPrizeNegoCommand extends AbstractPokerCommand {
	public static NAME = "SrvEndJackpotTourPrizeNego";
	public static UID = 12509;
	
		public data: SrvEndJackpotTourPrizeNegoData;

	constructor() {
		super();
		this.init(3, 221, SrvEndJackpotTourPrizeNegoCommand.NAME);
	}
}
