
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourEndRemainingHandsUpdateData } from "../data/SrvTourEndRemainingHandsUpdateData";



export class SrvTourEndRemainingHandsUpdateCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourEndRemainingHandsUpdate";
	public static UID = 12452;
	
		public data: SrvTourEndRemainingHandsUpdateData;

	constructor() {
		super();
		this.init(3, 164, SrvTourEndRemainingHandsUpdateCommand.NAME);
	}
}
