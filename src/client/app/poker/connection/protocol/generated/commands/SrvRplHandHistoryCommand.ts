
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvRplHandHistoryData } from "../data/SrvRplHandHistoryData";



export class SrvRplHandHistoryCommand extends AbstractPokerCommand {
	public static NAME = "SrvRplHandHistory";
	public static UID = 4207;
	
		public data: SrvRplHandHistoryData;

	constructor() {
		super();
		this.init(1, 111, SrvRplHandHistoryCommand.NAME);
	}
}
