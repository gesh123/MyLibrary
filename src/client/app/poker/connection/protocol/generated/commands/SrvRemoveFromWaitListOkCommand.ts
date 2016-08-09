
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvRemoveFromWaitListOkData } from "../data/SrvRemoveFromWaitListOkData";



export class SrvRemoveFromWaitListOkCommand extends AbstractPokerCommand {
	public static NAME = "SrvRemoveFromWaitListOk";
	public static UID = 4157;
	
		public data: SrvRemoveFromWaitListOkData;

	constructor() {
		super();
		this.init(1, 61, SrvRemoveFromWaitListOkCommand.NAME);
	}
}
