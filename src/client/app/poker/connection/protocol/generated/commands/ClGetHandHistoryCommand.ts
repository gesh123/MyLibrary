
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetHandHistoryData } from "../data/ClGetHandHistoryData";



export class ClGetHandHistoryCommand extends AbstractPokerCommand {
	public static NAME = "ClGetHandHistory";
	public static UID = 10280;
	
		public data: ClGetHandHistoryData;

	constructor() {
		super();
		this.init(2, 2088, ClGetHandHistoryCommand.NAME);
	}
}
