
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerDelayedFoldData } from "../data/SrvPlayerDelayedFoldData";



export class SrvPlayerDelayedFoldCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerDelayedFold";
	public static UID = 4149;
	
		public data: SrvPlayerDelayedFoldData;

	constructor() {
		super();
		this.init(1, 53, SrvPlayerDelayedFoldCommand.NAME);
	}
}
