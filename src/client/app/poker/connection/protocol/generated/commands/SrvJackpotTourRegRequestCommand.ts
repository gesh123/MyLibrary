
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourRegRequestData } from "../data/SrvJackpotTourRegRequestData";



export class SrvJackpotTourRegRequestCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourRegRequest";
	public static UID = 12502;
	
		public data: SrvJackpotTourRegRequestData;

	constructor() {
		super();
		this.init(3, 214, SrvJackpotTourRegRequestCommand.NAME);
	}
}
