
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClMiscForgotPassCommand extends AbstractPokerCommand {
	public static NAME = "ClMiscForgotPass";
	public static UID = 24686;
	
	constructor() {
		super();
		this.init(6, 110, ClMiscForgotPassCommand.NAME);
	}
}
