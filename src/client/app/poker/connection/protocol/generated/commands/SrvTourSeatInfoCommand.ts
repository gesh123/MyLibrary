
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourSeatInfoData } from "../data/SrvTourSeatInfoData";



export class SrvTourSeatInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourSeatInfo";
	public static UID = 12410;
	
		public data: SrvTourSeatInfoData;

	constructor() {
		super();
		this.init(3, 122, SrvTourSeatInfoCommand.NAME);
	}
}
