
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvCardDeckInUseData } from "../data/SrvCardDeckInUseData";



export class SrvCardDeckInUseCommand extends AbstractPokerCommand {
	public static NAME = "SrvCardDeckInUse";
	public static UID = 4261;
	
		public data: SrvCardDeckInUseData;

	constructor() {
		super();
		this.init(1, 165, SrvCardDeckInUseCommand.NAME);
	}
}
