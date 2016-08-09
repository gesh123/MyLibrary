
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClPingData } from "../data/ClPingData";



export class ClPingCommand extends AbstractPokerCommand {
	public static NAME = "ClPing";
	public static UID = 10273;
	
		public data: ClPingData;

	constructor() {
		super();
		this.init(2, 2081, ClPingCommand.NAME);
	}
}
