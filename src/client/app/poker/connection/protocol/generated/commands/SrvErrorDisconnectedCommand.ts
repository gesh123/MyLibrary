
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvErrorDisconnectedData } from "../data/SrvErrorDisconnectedData";



export class SrvErrorDisconnectedCommand extends AbstractPokerCommand {
	public static NAME = "SrvErrorDisconnected";
	public static UID = 4098;
	
		public data: SrvErrorDisconnectedData;

	constructor() {
		super();
		this.init(1, 2, SrvErrorDisconnectedCommand.NAME);
	}
}
