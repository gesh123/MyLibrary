
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClRejectInstantAddonData } from "../data/ClRejectInstantAddonData";



export class ClRejectInstantAddonCommand extends AbstractPokerCommand {
	public static NAME = "ClRejectInstantAddon";
	public static UID = 18482;
	
		public data: ClRejectInstantAddonData;

	constructor() {
		super();
		this.init(4, 2098, ClRejectInstantAddonCommand.NAME);
	}
}
