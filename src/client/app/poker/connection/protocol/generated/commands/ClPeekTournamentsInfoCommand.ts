
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClPeekTournamentsInfoData } from "../data/ClPeekTournamentsInfoData";



export class ClPeekTournamentsInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClPeekTournamentsInfo";
	public static UID = 18442;
	
		public data: ClPeekTournamentsInfoData;

	constructor() {
		super();
		this.init(4, 2058, ClPeekTournamentsInfoCommand.NAME);
	}
}
