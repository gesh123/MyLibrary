
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvStartJackpotTourPrizeNegoData } from "../data/SrvStartJackpotTourPrizeNegoData";



export class SrvStartJackpotTourPrizeNegoCommand extends AbstractPokerCommand {
	public static NAME = "SrvStartJackpotTourPrizeNego";
	public static UID = 12507;
	
		public data: SrvStartJackpotTourPrizeNegoData;

	constructor() {
		super();
		this.init(3, 219, SrvStartJackpotTourPrizeNegoCommand.NAME);
	}
}
