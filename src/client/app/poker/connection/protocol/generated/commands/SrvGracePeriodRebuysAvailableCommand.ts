
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class SrvGracePeriodRebuysAvailableCommand extends AbstractPokerCommand {
	public static NAME = "SrvGracePeriodRebuysAvailable";
	public static UID = 12472;
	
	constructor() {
		super();
		this.init(3, 184, SrvGracePeriodRebuysAvailableCommand.NAME);
	}
}
