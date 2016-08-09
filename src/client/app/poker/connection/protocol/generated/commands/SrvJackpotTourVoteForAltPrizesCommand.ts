
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourVoteForAltPrizesData } from "../data/SrvJackpotTourVoteForAltPrizesData";



export class SrvJackpotTourVoteForAltPrizesCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourVoteForAltPrizes";
	public static UID = 12510;
	
		public data: SrvJackpotTourVoteForAltPrizesData;

	constructor() {
		super();
		this.init(3, 222, SrvJackpotTourVoteForAltPrizesCommand.NAME);
	}
}
