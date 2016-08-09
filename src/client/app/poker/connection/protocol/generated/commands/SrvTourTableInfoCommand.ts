
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourTableInfoData } from "../data/SrvTourTableInfoData";



export class SrvTourTableInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourTableInfo";
	public static UID = 12398;
	
		public data: SrvTourTableInfoData;

	constructor() {
		super();
		this.init(3, 110, SrvTourTableInfoCommand.NAME);
	}
}
