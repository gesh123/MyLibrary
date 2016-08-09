
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvRakeRacePointsData } from "../data/SrvRakeRacePointsData";



export class SrvRakeRacePointsCommand extends AbstractPokerCommand {
	public static NAME = "SrvRakeRacePoints";
	public static UID = 4254;
	
		public data: SrvRakeRacePointsData;

	constructor() {
		super();
		this.init(1, 158, SrvRakeRacePointsCommand.NAME);
	}
}
