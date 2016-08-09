
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvBetRoundStartData } from "../data/SrvBetRoundStartData";



export class SrvBetRoundStartCommand extends AbstractPokerCommand {
	public static NAME = "SrvBetRoundStart";
	public static UID = 4262;
	
		public data: SrvBetRoundStartData;

	constructor() {
		super();
		this.init(1, 166, SrvBetRoundStartCommand.NAME);
	}
}
