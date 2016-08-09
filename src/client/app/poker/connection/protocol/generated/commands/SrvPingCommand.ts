
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPingData } from "../data/SrvPingData";



export class SrvPingCommand extends AbstractPokerCommand {
	public static NAME = "SrvPing";
	public static UID = 4188;
	
		public data: SrvPingData;

	constructor() {
		super();
		this.init(1, 92, SrvPingCommand.NAME);
	}
}
