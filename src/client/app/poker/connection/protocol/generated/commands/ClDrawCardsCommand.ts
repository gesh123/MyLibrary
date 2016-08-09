
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClDrawCardsData } from "../data/ClDrawCardsData";



export class ClDrawCardsCommand extends AbstractPokerCommand {
	public static NAME = "ClDrawCards";
	public static UID = 10296;
	
		public data: ClDrawCardsData;

	constructor() {
		super();
		this.init(2, 2104, ClDrawCardsCommand.NAME);
	}
}
