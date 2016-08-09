
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvRecentWinnersData } from "../data/SrvRecentWinnersData";



export class SrvRecentWinnersCommand extends AbstractPokerCommand {
	public static NAME = "SrvRecentWinners";
	public static UID = 12521;
	
		public data: SrvRecentWinnersData;

	constructor() {
		super();
		this.init(3, 233, SrvRecentWinnersCommand.NAME);
	}
}
