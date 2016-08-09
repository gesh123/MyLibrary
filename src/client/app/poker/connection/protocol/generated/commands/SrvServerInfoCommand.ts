
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvServerInfoData } from "../data/SrvServerInfoData";



export class SrvServerInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvServerInfo";
	public static UID = 4132;
	
		public data: SrvServerInfoData;

	constructor() {
		super();
		this.init(1, 36, SrvServerInfoCommand.NAME);
	}
}
