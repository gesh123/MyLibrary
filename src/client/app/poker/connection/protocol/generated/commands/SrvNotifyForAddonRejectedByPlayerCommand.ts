
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvNotifyForAddonRejectedByPlayerData } from "../data/SrvNotifyForAddonRejectedByPlayerData";



export class SrvNotifyForAddonRejectedByPlayerCommand extends AbstractPokerCommand {
	public static NAME = "SrvNotifyForAddonRejectedByPlayer";
	public static UID = 12496;
	
		public data: SrvNotifyForAddonRejectedByPlayerData;

	constructor() {
		super();
		this.init(3, 208, SrvNotifyForAddonRejectedByPlayerCommand.NAME);
	}
}
