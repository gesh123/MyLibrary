
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvNewsData } from "../data/SrvNewsData";



export class SrvNewsCommand extends AbstractPokerCommand {
	public static NAME = "SrvNews";
	public static UID = 4181;
	
		public data: SrvNewsData;

	constructor() {
		super();
		this.init(1, 85, SrvNewsCommand.NAME);
	}
}
