
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetTourMoneyData } from "../data/ClGetTourMoneyData";



export class ClGetTourMoneyCommand extends AbstractPokerCommand {
	public static NAME = "ClGetTourMoney";
	public static UID = 18453;
	
		public data: ClGetTourMoneyData;

	constructor() {
		super();
		this.init(4, 2069, ClGetTourMoneyCommand.NAME);
	}
}
