
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUserTurnTimeoutData } from "../data/SrvUserTurnTimeoutData";



export class SrvUserTurnTimeoutCommand extends AbstractPokerCommand {
	public static NAME = "SrvUserTurnTimeout";
	public static UID = 4243;
	
		public data: SrvUserTurnTimeoutData;

	constructor() {
		super();
		this.init(1, 147, SrvUserTurnTimeoutCommand.NAME);
	}
}
