
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetGameInfoData } from "../data/ClGetGameInfoData";



export class ClGetGameInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetGameInfo";
	public static UID = 10244;
	
		public data: ClGetGameInfoData;

	constructor() {
		super();
		this.init(2, 2052, ClGetGameInfoCommand.NAME);
	}
}
