
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetCondPrizeLimitInfoData } from "../data/ClGetCondPrizeLimitInfoData";



export class ClGetCondPrizeLimitInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetCondPrizeLimitInfo";
	public static UID = 18464;
	
		public data: ClGetCondPrizeLimitInfoData;

	constructor() {
		super();
		this.init(4, 2080, ClGetCondPrizeLimitInfoCommand.NAME);
	}
}
