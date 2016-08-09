
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTakeSeatInfoData } from "../data/SrvTakeSeatInfoData";



export class SrvTakeSeatInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTakeSeatInfo";
	public static UID = 12418;
	
		public data: SrvTakeSeatInfoData;

	constructor() {
		super();
		this.init(3, 130, SrvTakeSeatInfoCommand.NAME);
	}
}
