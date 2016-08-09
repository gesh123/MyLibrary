
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourTimesData } from "../data/SrvTourTimesData";



export class SrvTourTimesCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourTimes";
	public static UID = 12477;
	
		public data: SrvTourTimesData;

	constructor() {
		super();
		this.init(3, 189, SrvTourTimesCommand.NAME);
	}
}
