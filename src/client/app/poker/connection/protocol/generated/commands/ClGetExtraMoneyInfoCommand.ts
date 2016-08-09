
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetExtraMoneyInfoData } from "../data/ClGetExtraMoneyInfoData";



export class ClGetExtraMoneyInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetExtraMoneyInfo";
	public static UID = 18455;
	
		public data: ClGetExtraMoneyInfoData;

	constructor() {
		super();
		this.init(4, 2071, ClGetExtraMoneyInfoCommand.NAME);
	}
}
