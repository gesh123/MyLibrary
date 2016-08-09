
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUserTurnData } from "../data/SrvUserTurnData";



export class SrvUserTurnCommand extends AbstractPokerCommand {
	public static NAME = "SrvUserTurn";
	public static UID = 4175;
	
		public data: SrvUserTurnData;

	constructor() {
		super();
		this.init(1, 79, SrvUserTurnCommand.NAME);
	}
}
