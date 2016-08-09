
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourTourneyStatusData } from "../data/SrvTourTourneyStatusData";



export class SrvTourTourneyStatusCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourTourneyStatus";
	public static UID = 12404;
	
		public data: SrvTourTourneyStatusData;

	constructor() {
		super();
		this.init(3, 116, SrvTourTourneyStatusCommand.NAME);
	}
}
