
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourUnregisterResultData } from "../data/SrvTourUnregisterResultData";



export class SrvTourUnregisterResultCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourUnregisterResult";
	public static UID = 12402;
	
		public data: SrvTourUnregisterResultData;

	constructor() {
		super();
		this.init(3, 114, SrvTourUnregisterResultCommand.NAME);
	}
}
