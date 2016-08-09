
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourStartingInfoData } from "../data/SrvTourStartingInfoData";



export class SrvTourStartingInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourStartingInfo";
	public static UID = 12436;
	
		public data: SrvTourStartingInfoData;

	constructor() {
		super();
		this.init(3, 148, SrvTourStartingInfoCommand.NAME);
	}
}
