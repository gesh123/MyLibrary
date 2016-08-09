
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourStartTimeData } from "../data/SrvJackpotTourStartTimeData";



export class SrvJackpotTourStartTimeCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourStartTime";
	public static UID = 12512;
	
		public data: SrvJackpotTourStartTimeData;

	constructor() {
		super();
		this.init(3, 224, SrvJackpotTourStartTimeCommand.NAME);
	}
}
