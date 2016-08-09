
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourPlayerFinishedData } from "../data/SrvTourPlayerFinishedData";



export class SrvTourPlayerFinishedCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourPlayerFinished";
	public static UID = 12407;
	
		public data: SrvTourPlayerFinishedData;

	constructor() {
		super();
		this.init(3, 119, SrvTourPlayerFinishedCommand.NAME);
	}
}
