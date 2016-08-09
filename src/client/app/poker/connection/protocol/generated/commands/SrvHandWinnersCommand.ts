
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvHandWinnersData } from "../data/SrvHandWinnersData";



export class SrvHandWinnersCommand extends AbstractPokerCommand {
	public static NAME = "SrvHandWinners";
	public static UID = 4144;
	
		public data: SrvHandWinnersData;

	constructor() {
		super();
		this.init(1, 48, SrvHandWinnersCommand.NAME);
	}
}
