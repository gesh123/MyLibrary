
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvLateRegLevelData } from "../data/SrvLateRegLevelData";



export class SrvLateRegLevelCommand extends AbstractPokerCommand {
	public static NAME = "SrvLateRegLevel";
	public static UID = 12479;
	
		public data: SrvLateRegLevelData;

	constructor() {
		super();
		this.init(3, 191, SrvLateRegLevelCommand.NAME);
	}
}
