
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourPrizePoolData } from "../data/SrvTourPrizePoolData";



export class SrvTourPrizePoolCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourPrizePool";
	public static UID = 12530;
	
		public data: SrvTourPrizePoolData;

	constructor() {
		super();
		this.init(3, 242, SrvTourPrizePoolCommand.NAME);
	}
}
