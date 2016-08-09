
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvDeadBetData } from "../data/SrvDeadBetData";



export class SrvDeadBetCommand extends AbstractPokerCommand {
	public static NAME = "SrvDeadBet";
	public static UID = 4230;
	
		public data: SrvDeadBetData;

	constructor() {
		super();
		this.init(1, 134, SrvDeadBetCommand.NAME);
	}
}
