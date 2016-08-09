
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class SrvConnectErrorCommand extends AbstractPokerCommand {
	public static NAME = "SrvConnectError";
	public static UID = 4099;
	
	constructor() {
		super();
		this.init(1, 3, SrvConnectErrorCommand.NAME);
	}
}
