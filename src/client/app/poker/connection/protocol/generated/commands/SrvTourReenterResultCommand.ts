
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourReenterResultData } from "../data/SrvTourReenterResultData";



export class SrvTourReenterResultCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourReenterResult";
	public static UID = 12459;
	
		public data: SrvTourReenterResultData;

	constructor() {
		super();
		this.init(3, 171, SrvTourReenterResultCommand.NAME);
	}
}
