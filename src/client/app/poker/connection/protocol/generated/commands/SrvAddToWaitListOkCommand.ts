
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvAddToWaitListOkData } from "../data/SrvAddToWaitListOkData";



export class SrvAddToWaitListOkCommand extends AbstractPokerCommand {
	public static NAME = "SrvAddToWaitListOk";
	public static UID = 4153;
	
		public data: SrvAddToWaitListOkData;

	constructor() {
		super();
		this.init(1, 57, SrvAddToWaitListOkCommand.NAME);
	}
}
