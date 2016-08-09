
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUnknownTourData } from "../data/SrvUnknownTourData";



export class SrvUnknownTourCommand extends AbstractPokerCommand {
	public static NAME = "SrvUnknownTour";
	public static UID = 12397;
	
		public data: SrvUnknownTourData;

	constructor() {
		super();
		this.init(3, 109, SrvUnknownTourCommand.NAME);
	}
}
