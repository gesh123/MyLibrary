
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourStartTimeChangeData } from "../data/SrvTourStartTimeChangeData";



export class SrvTourStartTimeChangeCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourStartTimeChange";
	public static UID = 12499;
	
		public data: SrvTourStartTimeChangeData;

	constructor() {
		super();
		this.init(3, 211, SrvTourStartTimeChangeCommand.NAME);
	}
}
