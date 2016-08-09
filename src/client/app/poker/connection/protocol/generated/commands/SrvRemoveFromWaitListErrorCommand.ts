
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvRemoveFromWaitListErrorData } from "../data/SrvRemoveFromWaitListErrorData";



export class SrvRemoveFromWaitListErrorCommand extends AbstractPokerCommand {
	public static NAME = "SrvRemoveFromWaitListError";
	public static UID = 4159;
	
		public data: SrvRemoveFromWaitListErrorData;

	constructor() {
		super();
		this.init(1, 63, SrvRemoveFromWaitListErrorCommand.NAME);
	}
}
