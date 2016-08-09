
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvServerCountersInfoData } from "../data/SrvServerCountersInfoData";



export class SrvServerCountersInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvServerCountersInfo";
	public static UID = 4134;
	
		public data: SrvServerCountersInfoData;

	constructor() {
		super();
		this.init(1, 38, SrvServerCountersInfoCommand.NAME);
	}
}
