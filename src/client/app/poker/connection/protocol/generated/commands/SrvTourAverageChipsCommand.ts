
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourAverageChipsData } from "../data/SrvTourAverageChipsData";



export class SrvTourAverageChipsCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourAverageChips";
	public static UID = 12526;
	
		public data: SrvTourAverageChipsData;

	constructor() {
		super();
		this.init(3, 238, SrvTourAverageChipsCommand.NAME);
	}
}
