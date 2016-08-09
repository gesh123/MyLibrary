
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSendUserPassData } from "../data/ClSendUserPassData";



export class ClSendUserPassCommand extends AbstractPokerCommand {
	public static NAME = "ClSendUserPass";
	public static UID = 10278;
	
		public data: ClSendUserPassData;

	constructor() {
		super();
		this.init(2, 2086, ClSendUserPassCommand.NAME);
	}
}
