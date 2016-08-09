
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClConnectGameData } from "../data/ClConnectGameData";



export class ClConnectGameCommand extends AbstractPokerCommand {
	public static NAME = "ClConnectGame";
	public static UID = 10260;
	
		public data: ClConnectGameData;

	constructor() {
		super();
		this.init(2, 2068, ClConnectGameCommand.NAME);
	}
}
