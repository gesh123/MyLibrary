
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourMoneyData } from "../data/SrvTourMoneyData";



export class SrvTourMoneyCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourMoney";
	public static UID = 12401;
	
		public data: SrvTourMoneyData;

	constructor() {
		super();
		this.init(3, 113, SrvTourMoneyCommand.NAME);
	}
}
