
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetJackpotTourBuyInInfoData } from "../data/ClGetJackpotTourBuyInInfoData";



export class ClGetJackpotTourBuyInInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetJackpotTourBuyInInfo";
	public static UID = 18487;
	
		public data: ClGetJackpotTourBuyInInfoData;

	constructor() {
		super();
		this.init(4, 2103, ClGetJackpotTourBuyInInfoCommand.NAME);
	}
}
