
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvSitOkData } from "../data/SrvSitOkData";



export class SrvSitOkCommand extends AbstractPokerCommand {
	public static NAME = "SrvSitOk";
	public static UID = 4165;
	
		public data: SrvSitOkData;

	constructor() {
		super();
		this.init(1, 69, SrvSitOkCommand.NAME);
	}
}
