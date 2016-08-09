
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvGameStartDelayedForRebuysData } from "../data/SrvGameStartDelayedForRebuysData";



export class SrvGameStartDelayedForRebuysCommand extends AbstractPokerCommand {
	public static NAME = "SrvGameStartDelayedForRebuys";
	public static UID = 12469;
	
		public data: SrvGameStartDelayedForRebuysData;

	constructor() {
		super();
		this.init(3, 181, SrvGameStartDelayedForRebuysCommand.NAME);
	}
}
