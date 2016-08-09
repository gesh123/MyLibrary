
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSetAutoRebuysData } from "../data/ClSetAutoRebuysData";



export class ClSetAutoRebuysCommand extends AbstractPokerCommand {
	public static NAME = "ClSetAutoRebuys";
	public static UID = 18473;
	
		public data: ClSetAutoRebuysData;

	constructor() {
		super();
		this.init(4, 2089, ClSetAutoRebuysCommand.NAME);
	}
}
