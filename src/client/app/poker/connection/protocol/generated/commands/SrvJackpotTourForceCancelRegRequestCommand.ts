
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourForceCancelRegRequestData } from "../data/SrvJackpotTourForceCancelRegRequestData";



export class SrvJackpotTourForceCancelRegRequestCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourForceCancelRegRequest";
	public static UID = 12504;
	
		public data: SrvJackpotTourForceCancelRegRequestData;

	constructor() {
		super();
		this.init(3, 216, SrvJackpotTourForceCancelRegRequestCommand.NAME);
	}
}
