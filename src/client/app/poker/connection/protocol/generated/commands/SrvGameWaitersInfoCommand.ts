
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvGameWaitersInfoData } from "../data/SrvGameWaitersInfoData";



export class SrvGameWaitersInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvGameWaitersInfo";
	public static UID = 4136;
	
		public data: SrvGameWaitersInfoData;

	constructor() {
		super();
		this.init(1, 40, SrvGameWaitersInfoCommand.NAME);
	}
}
