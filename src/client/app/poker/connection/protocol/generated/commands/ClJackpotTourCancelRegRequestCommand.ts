
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClJackpotTourCancelRegRequestData } from "../data/ClJackpotTourCancelRegRequestData";



export class ClJackpotTourCancelRegRequestCommand extends AbstractPokerCommand {
	public static NAME = "ClJackpotTourCancelRegRequest";
	public static UID = 18486;
	
		public data: ClJackpotTourCancelRegRequestData;

	constructor() {
		super();
		this.init(4, 2102, ClJackpotTourCancelRegRequestCommand.NAME);
	}
}
