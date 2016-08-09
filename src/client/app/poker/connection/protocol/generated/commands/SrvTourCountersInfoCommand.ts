
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourCountersInfoData } from "../data/SrvTourCountersInfoData";



export class SrvTourCountersInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourCountersInfo";
	public static UID = 12389;
	
		public data: SrvTourCountersInfoData;

	constructor() {
		super();
		this.init(3, 101, SrvTourCountersInfoCommand.NAME);
	}
}
