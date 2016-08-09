
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";



export class ClSubscribeForBBJNotificationsCommand extends AbstractPokerCommand {
	public static NAME = "ClSubscribeForBBJNotifications";
	public static UID = 10284;
	
	constructor() {
		super();
		this.init(2, 2092, ClSubscribeForBBJNotificationsCommand.NAME);
	}
}
