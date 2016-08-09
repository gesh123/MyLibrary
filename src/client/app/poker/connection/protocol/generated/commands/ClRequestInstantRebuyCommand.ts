
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClRequestInstantRebuyData } from "../data/ClRequestInstantRebuyData";



export class ClRequestInstantRebuyCommand extends AbstractPokerCommand {
	public static NAME = "ClRequestInstantRebuy";
	public static UID = 18475;
	
		public data: ClRequestInstantRebuyData;

	constructor() {
		super();
		this.init(4, 2091, ClRequestInstantRebuyCommand.NAME);
	}
}
