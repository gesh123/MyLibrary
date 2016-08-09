
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourEndRemainingHandsData } from "../data/SrvTourEndRemainingHandsData";



export class SrvTourEndRemainingHandsCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourEndRemainingHands";
	public static UID = 12451;
	
		public data: SrvTourEndRemainingHandsData;

	constructor() {
		super();
		this.init(3, 163, SrvTourEndRemainingHandsCommand.NAME);
	}
}
