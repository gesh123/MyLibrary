
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetTournamentsInfoData } from "../data/ClGetTournamentsInfoData";



export class ClGetTournamentsInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetTournamentsInfo";
	public static UID = 18434;
	
		public data: ClGetTournamentsInfoData;

	constructor() {
		super();
		this.init(4, 2050, ClGetTournamentsInfoCommand.NAME);
	}
}
