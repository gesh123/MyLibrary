
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateJackpotsData } from "../data/SrvUpdateJackpotsData";



export class SrvUpdateJackpotsCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateJackpots";
	public static UID = 4234;
	
		public data: SrvUpdateJackpotsData;

	constructor() {
		super();
		this.init(1, 138, SrvUpdateJackpotsCommand.NAME);
	}
}
