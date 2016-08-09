
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvMoneyData } from "../data/SrvMoneyData";



export class SrvMoneyCommand extends AbstractPokerCommand {
	public static NAME = "SrvMoney";
	public static UID = 4169;
	
		public data: SrvMoneyData;

	constructor() {
		super();
		this.init(1, 73, SrvMoneyCommand.NAME);
	}
}
