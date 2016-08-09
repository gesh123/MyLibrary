
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvCardDealData } from "../data/SrvCardDealData";



export class SrvCardDealCommand extends AbstractPokerCommand {
	public static NAME = "SrvCardDeal";
	public static UID = 4172;
	
		public data: SrvCardDealData;

	constructor() {
		super();
		this.init(1, 76, SrvCardDealCommand.NAME);
	}
}
