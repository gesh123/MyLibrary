
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClRequestInstantAddonData } from "../data/ClRequestInstantAddonData";



export class ClRequestInstantAddonCommand extends AbstractPokerCommand {
	public static NAME = "ClRequestInstantAddon";
	public static UID = 18481;
	
		public data: ClRequestInstantAddonData;

	constructor() {
		super();
		this.init(4, 2097, ClRequestInstantAddonCommand.NAME);
	}
}
