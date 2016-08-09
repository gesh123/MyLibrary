
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourDetailsData } from "../data/SrvTourDetailsData";



export class SrvTourDetailsCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourDetails";
	public static UID = 12394;
	
		public data: SrvTourDetailsData;

	constructor() {
		super();
		this.init(3, 106, SrvTourDetailsCommand.NAME);
	}
}
