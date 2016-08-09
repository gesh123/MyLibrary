
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateRebuysCountData } from "../data/SrvUpdateRebuysCountData";



export class SrvUpdateRebuysCountCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateRebuysCount";
	public static UID = 12475;
	
		public data: SrvUpdateRebuysCountData;

	constructor() {
		super();
		this.init(3, 187, SrvUpdateRebuysCountCommand.NAME);
	}
}
