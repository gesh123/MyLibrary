
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvDisconnectNotifyData } from "../data/SrvDisconnectNotifyData";



export class SrvDisconnectNotifyCommand extends AbstractPokerCommand {
	public static NAME = "SrvDisconnectNotify";
	public static UID = 4246;
	
		public data: SrvDisconnectNotifyData;

	constructor() {
		super();
		this.init(1, 150, SrvDisconnectNotifyCommand.NAME);
	}
}
