
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerRemovedFromTourData } from "../data/SrvPlayerRemovedFromTourData";



export class SrvPlayerRemovedFromTourCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerRemovedFromTour";
	public static UID = 12486;
	
		public data: SrvPlayerRemovedFromTourData;

	constructor() {
		super();
		this.init(3, 198, SrvPlayerRemovedFromTourCommand.NAME);
	}
}
