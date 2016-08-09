
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvJackpotTourCancelRegRequestData } from "../data/SrvJackpotTourCancelRegRequestData";



export class SrvJackpotTourCancelRegRequestCommand extends AbstractPokerCommand {
	public static NAME = "SrvJackpotTourCancelRegRequest";
	public static UID = 12503;
	
		public data: SrvJackpotTourCancelRegRequestData;

	constructor() {
		super();
		this.init(3, 215, SrvJackpotTourCancelRegRequestCommand.NAME);
	}
}
