
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerProfileData } from "../data/SrvPlayerProfileData";



export class SrvPlayerProfileCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerProfile";
	public static UID = 4189;
	
		public data: SrvPlayerProfileData;

	constructor() {
		super();
		this.init(1, 93, SrvPlayerProfileCommand.NAME);
	}
}
