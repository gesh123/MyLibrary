
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClMoreMoneyData } from "../data/ClMoreMoneyData";



export class ClMoreMoneyCommand extends AbstractPokerCommand {
	public static NAME = "ClMoreMoney";
	public static UID = 10266;
	
		public data: ClMoreMoneyData;

	constructor() {
		super();
		this.init(2, 2074, ClMoreMoneyCommand.NAME);
	}
}
