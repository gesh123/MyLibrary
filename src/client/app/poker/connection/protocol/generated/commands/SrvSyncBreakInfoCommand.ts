
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvSyncBreakInfoData } from "../data/SrvSyncBreakInfoData";



export class SrvSyncBreakInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvSyncBreakInfo";
	public static UID = 12474;
	
		public data: SrvSyncBreakInfoData;

	constructor() {
		super();
		this.init(3, 186, SrvSyncBreakInfoCommand.NAME);
	}
}
