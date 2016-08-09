
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateTourReentrantsCountData } from "../data/SrvUpdateTourReentrantsCountData";



export class SrvUpdateTourReentrantsCountCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateTourReentrantsCount";
	public static UID = 12461;
	
		public data: SrvUpdateTourReentrantsCountData;

	constructor() {
		super();
		this.init(3, 173, SrvUpdateTourReentrantsCountCommand.NAME);
	}
}
