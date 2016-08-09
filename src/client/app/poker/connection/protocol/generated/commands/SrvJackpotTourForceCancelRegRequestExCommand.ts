
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourForceCancelRegRequestExData } from "../data/SrvJackpotTourForceCancelRegRequestExData";



export class SrvJackpotTourForceCancelRegRequestExCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourForceCancelRegRequestEx";
	public static UID = 12505;
	
		public data: SrvJackpotTourForceCancelRegRequestExData;

	constructor() {
		super();
		this.init(3, 217, SrvJackpotTourForceCancelRegRequestExCommand.NAME);
	}
}
