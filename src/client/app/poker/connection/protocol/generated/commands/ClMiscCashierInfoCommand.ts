
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClMiscCashierInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClMiscCashierInfo";
	public static UID = 24681;
	
	constructor() {
		super();
		this.init(6, 105, ClMiscCashierInfoCommand.NAME);
	}
}
