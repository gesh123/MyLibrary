
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourSmallestStackData } from "../data/SrvTourSmallestStackData";



export class SrvTourSmallestStackCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourSmallestStack";
	public static UID = 12529;
	
		public data: SrvTourSmallestStackData;

	constructor() {
		super();
		this.init(3, 241, SrvTourSmallestStackCommand.NAME);
	}
}
