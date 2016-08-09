
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourPlayersCountData } from "../data/SrvTourPlayersCountData";



export class SrvTourPlayersCountCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourPlayersCount";
	public static UID = 12528;
	
		public data: SrvTourPlayersCountData;

	constructor() {
		super();
		this.init(3, 240, SrvTourPlayersCountCommand.NAME);
	}
}
