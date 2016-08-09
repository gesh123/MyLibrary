
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetPlayerProfileData } from "../data/ClGetPlayerProfileData";



export class ClGetPlayerProfileCommand extends AbstractPokerCommand {
	public static NAME = "ClGetPlayerProfile";
	public static UID = 24696;
	
		public data: ClGetPlayerProfileData;

	constructor() {
		super();
		this.init(6, 120, ClGetPlayerProfileCommand.NAME);
	}
}
