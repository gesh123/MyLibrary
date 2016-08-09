
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClGetMoneyCommand extends AbstractPokerCommand {
	public static NAME = "ClGetMoney";
	public static UID = 10263;
	
	constructor() {
		super();
		this.init(2, 2071, ClGetMoneyCommand.NAME);
	}
}
