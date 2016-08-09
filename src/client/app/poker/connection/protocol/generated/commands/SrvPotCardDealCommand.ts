
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPotCardDealData } from "../data/SrvPotCardDealData";



export class SrvPotCardDealCommand extends AbstractPokerCommand {
	public static NAME = "SrvPotCardDeal";
	public static UID = 4173;
	
		public data: SrvPotCardDealData;

	constructor() {
		super();
		this.init(1, 77, SrvPotCardDealCommand.NAME);
	}
}
