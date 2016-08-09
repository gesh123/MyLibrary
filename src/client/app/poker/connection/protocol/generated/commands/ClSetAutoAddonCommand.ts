
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSetAutoAddonData } from "../data/ClSetAutoAddonData";



export class ClSetAutoAddonCommand extends AbstractPokerCommand {
	public static NAME = "ClSetAutoAddon";
	public static UID = 18474;
	
		public data: ClSetAutoAddonData;

	constructor() {
		super();
		this.init(4, 2090, ClSetAutoAddonCommand.NAME);
	}
}
