
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourLevelData } from "../data/SrvTourLevelData";



export class SrvTourLevelCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourLevel";
	public static UID = 12478;
	
		public data: SrvTourLevelData;

	constructor() {
		super();
		this.init(3, 190, SrvTourLevelCommand.NAME);
	}
}
