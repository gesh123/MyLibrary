
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvBackOnSeatOkData } from "../data/SrvBackOnSeatOkData";



export class SrvBackOnSeatOkCommand extends AbstractPokerCommand {
	public static NAME = "SrvBackOnSeatOk";
	public static UID = 4166;
	
		public data: SrvBackOnSeatOkData;

	constructor() {
		super();
		this.init(1, 70, SrvBackOnSeatOkCommand.NAME);
	}
}
