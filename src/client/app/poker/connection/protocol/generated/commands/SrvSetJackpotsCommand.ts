
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvSetJackpotsData } from "../data/SrvSetJackpotsData";



export class SrvSetJackpotsCommand extends AbstractPokerCommand {
	public static NAME = "SrvSetJackpots";
	public static UID = 4233;
	
		public data: SrvSetJackpotsData;

	constructor() {
		super();
		this.init(1, 137, SrvSetJackpotsCommand.NAME);
	}
}
