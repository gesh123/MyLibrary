
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourEndRemainingTimeData } from "../data/SrvTourEndRemainingTimeData";



export class SrvTourEndRemainingTimeCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourEndRemainingTime";
	public static UID = 12453;
	
		public data: SrvTourEndRemainingTimeData;

	constructor() {
		super();
		this.init(3, 165, SrvTourEndRemainingTimeCommand.NAME);
	}
}
