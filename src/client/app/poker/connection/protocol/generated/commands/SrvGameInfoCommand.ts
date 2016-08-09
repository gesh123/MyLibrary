
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvGameInfoData } from "../data/SrvGameInfoData";



export class SrvGameInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvGameInfo";
	public static UID = 4135;
	
		public data: SrvGameInfoData;

	constructor() {
		super();
		this.init(1, 39, SrvGameInfoCommand.NAME);
	}
}
