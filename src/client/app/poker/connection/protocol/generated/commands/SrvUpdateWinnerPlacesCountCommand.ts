
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateWinnerPlacesCountData } from "../data/SrvUpdateWinnerPlacesCountData";



export class SrvUpdateWinnerPlacesCountCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateWinnerPlacesCount";
	public static UID = 12481;
	
		public data: SrvUpdateWinnerPlacesCountData;

	constructor() {
		super();
		this.init(3, 193, SrvUpdateWinnerPlacesCountCommand.NAME);
	}
}
