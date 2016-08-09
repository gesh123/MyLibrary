
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvAddToWaitListErrorData } from "../data/SrvAddToWaitListErrorData";



export class SrvAddToWaitListErrorCommand extends AbstractPokerCommand {
	public static NAME = "SrvAddToWaitListError";
	public static UID = 4155;
	
		public data: SrvAddToWaitListErrorData;

	constructor() {
		super();
		this.init(1, 59, SrvAddToWaitListErrorCommand.NAME);
	}
}
