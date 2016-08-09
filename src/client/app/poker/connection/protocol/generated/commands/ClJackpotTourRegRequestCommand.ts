
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClJackpotTourRegRequestData } from "../data/ClJackpotTourRegRequestData";



export class ClJackpotTourRegRequestCommand extends AbstractPokerCommand {
	public static NAME = "ClJackpotTourRegRequest";
	public static UID = 18485;
	
		public data: ClJackpotTourRegRequestData;

	constructor() {
		super();
		this.init(4, 2101, ClJackpotTourRegRequestCommand.NAME);
	}
}
