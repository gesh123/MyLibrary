
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvOutOfMoneyData } from "../data/SrvOutOfMoneyData";



export class SrvOutOfMoneyCommand extends AbstractPokerCommand {
	public static NAME = "SrvOutOfMoney";
	public static UID = 4179;
	
		public data: SrvOutOfMoneyData;

	constructor() {
		super();
		this.init(1, 83, SrvOutOfMoneyCommand.NAME);
	}
}
