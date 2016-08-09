
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourAwardIncrementedData } from "../data/SrvTourAwardIncrementedData";



export class SrvTourAwardIncrementedCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourAwardIncremented";
	public static UID = 12533;
	
		public data: SrvTourAwardIncrementedData;

	constructor() {
		super();
		this.init(3, 245, SrvTourAwardIncrementedCommand.NAME);
	}
}
