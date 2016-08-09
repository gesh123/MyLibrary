
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetServerInfoData } from "../data/ClGetServerInfoData";



export class ClGetServerInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetServerInfo";
	public static UID = 10242;
	
		public data: ClGetServerInfoData;

	constructor() {
		super();
		this.init(2, 2050, ClGetServerInfoCommand.NAME);
	}
}
