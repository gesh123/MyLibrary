
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvGameStartData } from "../data/SrvGameStartData";



export class SrvGameStartCommand extends AbstractPokerCommand {
	public static NAME = "SrvGameStart";
	public static UID = 4186;
	
		public data: SrvGameStartData;

	constructor() {
		super();
		this.init(1, 90, SrvGameStartCommand.NAME);
	}
}
