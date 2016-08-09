
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class SrvEnableIncrementalTourAwardingCommand extends AbstractPokerCommand {
	public static NAME = "SrvEnableIncrementalTourAwarding";
	public static UID = 12531;
	
	constructor() {
		super();
		this.init(3, 243, SrvEnableIncrementalTourAwardingCommand.NAME);
	}
}
