
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvBetRoundCompleteData } from "../data/SrvBetRoundCompleteData";



export class SrvBetRoundCompleteCommand extends AbstractPokerCommand {
	public static NAME = "SrvBetRoundComplete";
	public static UID = 4178;
	
		public data: SrvBetRoundCompleteData;

	constructor() {
		super();
		this.init(1, 82, SrvBetRoundCompleteCommand.NAME);
	}
}
