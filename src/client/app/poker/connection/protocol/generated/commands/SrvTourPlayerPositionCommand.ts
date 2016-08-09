
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourPlayerPositionData } from "../data/SrvTourPlayerPositionData";



export class SrvTourPlayerPositionCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourPlayerPosition";
	public static UID = 12525;
	
		public data: SrvTourPlayerPositionData;

	constructor() {
		super();
		this.init(3, 237, SrvTourPlayerPositionCommand.NAME);
	}
}
