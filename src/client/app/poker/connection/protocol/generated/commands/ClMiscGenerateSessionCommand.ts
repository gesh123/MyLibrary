
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClMiscGenerateSessionData } from "../data/ClMiscGenerateSessionData";



export class ClMiscGenerateSessionCommand extends AbstractPokerCommand {
	public static NAME = "ClMiscGenerateSession";
	public static UID = 24683;
	
		public data: ClMiscGenerateSessionData;

	constructor() {
		super();
		this.init(6, 107, ClMiscGenerateSessionCommand.NAME);
	}
}
