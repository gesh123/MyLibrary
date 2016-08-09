
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvDrawCardsData } from "../data/SrvDrawCardsData";



export class SrvDrawCardsCommand extends AbstractPokerCommand {
	public static NAME = "SrvDrawCards";
	public static UID = 4247;
	
		public data: SrvDrawCardsData;

	constructor() {
		super();
		this.init(1, 151, SrvDrawCardsCommand.NAME);
	}
}
