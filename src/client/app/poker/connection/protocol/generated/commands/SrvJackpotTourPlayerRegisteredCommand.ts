
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourPlayerRegisteredData } from "../data/SrvJackpotTourPlayerRegisteredData";



export class SrvJackpotTourPlayerRegisteredCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourPlayerRegistered";
	public static UID = 12514;
	
		public data: SrvJackpotTourPlayerRegisteredData;

	constructor() {
		super();
		this.init(3, 226, SrvJackpotTourPlayerRegisteredCommand.NAME);
	}
}
