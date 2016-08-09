
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvGameStartDelayedForAddonsData } from "../data/SrvGameStartDelayedForAddonsData";



export class SrvGameStartDelayedForAddonsCommand extends AbstractPokerCommand {
	public static NAME = "SrvGameStartDelayedForAddons";
	public static UID = 12492;
	
		public data: SrvGameStartDelayedForAddonsData;

	constructor() {
		super();
		this.init(3, 204, SrvGameStartDelayedForAddonsCommand.NAME);
	}
}
