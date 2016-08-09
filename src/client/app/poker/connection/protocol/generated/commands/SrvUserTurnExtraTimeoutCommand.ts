
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUserTurnExtraTimeoutData } from "../data/SrvUserTurnExtraTimeoutData";



export class SrvUserTurnExtraTimeoutCommand extends AbstractPokerCommand {
	public static NAME = "SrvUserTurnExtraTimeout";
	public static UID = 4244;
	
		public data: SrvUserTurnExtraTimeoutData;

	constructor() {
		super();
		this.init(1, 148, SrvUserTurnExtraTimeoutCommand.NAME);
	}
}
