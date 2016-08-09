
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTournamentsInfoData } from "../data/SrvTournamentsInfoData";



export class SrvTournamentsInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTournamentsInfo";
	public static UID = 12390;
	
		public data: SrvTournamentsInfoData;

	constructor() {
		super();
		this.init(3, 102, SrvTournamentsInfoCommand.NAME);
	}
}
