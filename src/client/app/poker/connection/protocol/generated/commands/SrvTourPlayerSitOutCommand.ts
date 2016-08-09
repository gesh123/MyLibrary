
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourPlayerSitOutData } from "../data/SrvTourPlayerSitOutData";



export class SrvTourPlayerSitOutCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourPlayerSitOut";
	public static UID = 12440;
	
		public data: SrvTourPlayerSitOutData;

	constructor() {
		super();
		this.init(3, 152, SrvTourPlayerSitOutCommand.NAME);
	}
}
