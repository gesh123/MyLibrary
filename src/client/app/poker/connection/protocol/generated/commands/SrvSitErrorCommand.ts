
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvSitErrorData } from "../data/SrvSitErrorData";



export class SrvSitErrorCommand extends AbstractPokerCommand {
	public static NAME = "SrvSitError";
	public static UID = 4167;
	
		public data: SrvSitErrorData;

	constructor() {
		super();
		this.init(1, 71, SrvSitErrorCommand.NAME);
	}
}
