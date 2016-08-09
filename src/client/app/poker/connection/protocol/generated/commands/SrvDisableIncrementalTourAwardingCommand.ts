
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class SrvDisableIncrementalTourAwardingCommand extends AbstractPokerCommand {
	public static NAME = "SrvDisableIncrementalTourAwarding";
	public static UID = 12532;
	
	constructor() {
		super();
		this.init(3, 244, SrvDisableIncrementalTourAwardingCommand.NAME);
	}
}
