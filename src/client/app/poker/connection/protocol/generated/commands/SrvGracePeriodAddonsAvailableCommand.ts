
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class SrvGracePeriodAddonsAvailableCommand extends AbstractPokerCommand {
	public static NAME = "SrvGracePeriodAddonsAvailable";
	public static UID = 12494;
	
	constructor() {
		super();
		this.init(3, 206, SrvGracePeriodAddonsAvailableCommand.NAME);
	}
}
