
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClRplGetHandHistoryData } from "../data/ClRplGetHandHistoryData";



export class ClRplGetHandHistoryCommand extends AbstractPokerCommand {
	public static NAME = "ClRplGetHandHistory";
	public static UID = 24691;
	
		public data: ClRplGetHandHistoryData;

	constructor() {
		super();
		this.init(6, 115, ClRplGetHandHistoryCommand.NAME);
	}
}
